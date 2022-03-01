import {assert} from 'chai';
import Router from './Router';
import Block from '../Block';
import {RouterLinks} from '../../shared/const';

const router = new Router(window, `#app`);

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

describe('Router', () => {
  it('should ', () => {
    assert.exists(router);
  });
  it('Регистрация списка роутов', () => {
    router
        .use(RouterLinks.CHAT, PrivateComponent, 'private')
        .use(RouterLinks.LOGIN, PublicComponent, 'public')
        .use(RouterLinks.ERROR_404, ErrorComponent, 'error');
    assert.lengthOf(router.routes, 3);
  });
});
