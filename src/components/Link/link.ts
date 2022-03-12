import Block from '../../modules/Block';
import {TRenderElement} from '../../modules/Block/types';
import {LinkProps} from './types';
import Router from '../../modules/Router';
const template = require('./template.pug');

class Link extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      events: {
        click: (event: MouseEvent) => this.onClick(event),
      },
      ...props,
    });
  }

  onClick(event: MouseEvent): void {
    event.preventDefault();
    Router.go(this.props.path);
  }

  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default Link;
