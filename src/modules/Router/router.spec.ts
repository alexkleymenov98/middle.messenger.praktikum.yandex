import {JSDOM} from 'jsdom';
import 'jsdom-global/register';
import {assert} from 'chai';
import Router from './Router';
import Block from '../Block';
import {RouterLinks} from '../../shared/const';


const dom = new JSDOM(
    `<!DOCTYPE html><html><head></head><body><div class="wrapper"><div id="app"></div></div></body></html>`,
    {url: 'http://localhost:3000'},
);

(global as any).window = dom.window;

const router = new Router(window);

class PublicComponent extends Block {
  constructor() {
    super({name: 'PublicComponent'});
  }
}

class PrivateComponent extends Block {
  constructor() {
    super({name: 'PrivateComponent'});
  }
}

class ErrorComponent extends Block {
  constructor() {
    super({name: 'ErrorComponent'});
  }
}

describe('Router', ()=>{
  it('should ', ()=> {
    assert.exists(router);
  });
  it('Регистрация списка роутов', ()=> {
    router
        .use(RouterLinks.CHAT, PrivateComponent, 'private')
        .use(RouterLinks.LOGIN, PublicComponent, 'public')
        .use(RouterLinks.ERROR_404, ErrorComponent, 'error')
        .start();
    assert.lengthOf(router.routes, 3);
  });
});
