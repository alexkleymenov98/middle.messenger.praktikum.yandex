import Route from './Route';
import Block from '../Block';
import {TRouteProps} from './types';
import {RouterLinks} from '../../shared/const';

export enum RouterEvents {
  UPDATED = 'updated',
}

class Router {
  isAuth: boolean;
  routes: Route[];
  window: Window;
  history: History;
  _currentRoute: null | Route;
  private static __instance: Router;
  private _rootQuery: string;

  constructor(windowData: Window) {
    this.isAuth = false;
    if (Router.__instance) {
      return Router.__instance;
    }
    this.routes = [];
    this.history = windowData.history;
    this.window = windowData;
    this._currentRoute = null;
    Router.__instance = this;
    this._rootQuery = `#app`;
  }

  enterAuth(value:boolean):Router {
    this.isAuth = value;
    return this;
  }

  start(): void {
    this.window.onpopstate = (event:PopStateEvent) => {
      this._onRoute((event.currentTarget as typeof window).location.pathname);
    };
    this._onRoute(this.window.location.pathname);
  }

  _onRoute(pathname: string): void {
    const route = this.getRoute(pathname);
    if (!route || (!this.isAuth && route.accessRight === 'private')) {
      const route404 = this.routes.find((route) => route.match(RouterLinks.ERROR_404));
      route404?.render();
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
