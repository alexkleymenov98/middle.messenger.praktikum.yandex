import {expect} from 'chai';
import * as pug from 'pug';
import Block from './block';
import {TRenderElement} from './types';

const templateMock = pug.render('.mock-block {{content}}');

class MockComponent extends Block {
  constructor(props:{content:string}) {
    super(props, 'main', 'mock-block-wrapper');
  }
  render(): TRenderElement {
    return this.compile(templateMock, this.props);
  }
}

describe('Modules Block', ()=>{
  it('отрисовка шаблона компонента', function() {
    const mock = new MockComponent({content: 'Текст внутри блока'});
    mock.render();
    expect(mock.getContent().outerHTML).to.contain('Текст внутри блока');
    expect(mock.getContent().outerHTML).to.contain('<main');
    expect(mock.getContent().outerHTML).to.contain('mock-block-wrapper');
    expect(mock.getContent().outerHTML).to.contain('mock-block');
  });
});


