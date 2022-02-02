import Block from '../../../../modules/Block';
import {TRenderElement} from '../../../../modules/Block/types';
import template from './template.pug';
import {NavigationProps} from './types';

class Navigation extends Block<NavigationProps> {
  constructor(props:Partial<NavigationProps>) {
    super({
      ...props});
  }
  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}
export default Navigation;
