import Block from '../Block';
import {isEqual} from '../../utils/isEqual';
import {render} from '../../utils/renderDom';
import {TRouteProps} from './types';
import {ROUTE_ACCESS} from '../../shared/const';

class Route {
  _pathname:string;
  _blockClass:any;
  _block:any;
  _props;
  accessRight:ROUTE_ACCESS;
  constructor(pathname:string, view:Block, props:TRouteProps) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
    this.accessRight = props.accessRight;
  }

  navigate(pathname:string):void {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  match(pathname:string): boolean {
    return isEqual(pathname, this._pathname);
  }

  leave():void {
    if (this._block) {
      this._block.hide();
    }
  }

  render():void {
    if (!this._block) {
      this._block = new this._blockClass();
    }
    render(this._props.rootQuery, this._block);
  }
}

export default Route;
