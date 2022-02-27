import Route from './Route';
import {render} from '../../utils/renderDom';
import Errors from '../../pages/Errors';
import Block from '../Block';
import {TRouteProps} from './types';
import {RouterLinks} from '../../shared/const';

class Router {
  isAuth: boolean;
  routes: Route[];
  history: History;
  _currentRoute: null | Route;
  private static __instance: Router;
  private _rootQuery: string;
  private error404: Block;

  constructor() {
    this.isAuth = false;
    if (Router.__instance) {
      return Router.__instance;
    }
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    Router.__instance = this;
    this.error404 = new Errors({code: 404, text: 'Не туда попали'});
    this._rootQuery = `#app`;
  }

  enterAuth(value:boolean):Router {
    this.isAuth = value;
    return this;
  }

  start(): void {
    window.onpopstate = (event:PopStateEvent) => {
      this._onRoute((event.currentTarget as typeof window).location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string): void {
    const route = this.getRoute(pathname);
    if (!route || (!this.isAuth && route.accessRight === 'private')) {
      render(this._rootQuery, this.error404);
      return;
    }
    if (this.isAuth && route.accessRight === 'public') {
      this.go(RouterLinks.CHAT);
      return;
    }
    if (this._currentRoute) {
      this._currentRoute.leave();
    }
    route.render();
  }

  use(pathname: string, block: Block, accessRight:TRouteProps['accessRight']): Router {
    const route = new Route(pathname, block, {rootQuery: this._rootQuery, accessRight});
    this.routes.push(route);

    return this;
  }

  getRoute(pathname: string): Route | undefined {
    return this.routes.find((route) => route.match(pathname));
  }

  go(pathname: string): void {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back(): void {
    this.history.back();
  }

  forward(): void {
    this.history.forward();
  }
}

export default Router;
