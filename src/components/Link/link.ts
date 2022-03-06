import Block from '../../modules/Block';
import {TRenderElement} from '../../modules/Block/types';
import {LinkProps} from './types';
import template from './template.pug';
import Router from '../../modules/Router';

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
    const props = this.props;
    return this.compile(template, props);
  }
}

export default Link;
