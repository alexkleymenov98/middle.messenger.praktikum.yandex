import Block from '../../modules/Block';
import {RegistrationProps} from './types';
import Form from '../../components/Form';
import {BUTTON_NAME, InputLabel, InputName, RouterLinks, RouterLinksName} from '../../shared/const';
import Input from '../../components/Input';
import template from '../../layouts/Page';
import {TRenderElement} from '../../modules/Block/types';

class Registration extends Block<RegistrationProps> {
  constructor(props:Partial<RegistrationProps>) {
    super({...props,
      title: 'Регистрация',
      content: new Form({
        linkName: RouterLinksName.LOGIN,
        linkPath: RouterLinks.LOGIN,
        submitName: BUTTON_NAME.REGISTRATION,
        content: [
          new Input({
            inputName: InputName.EMAIL,
            labelName: InputLabel.EMAIL,
          }),
          new Input({
            inputName: InputName.LOGIN,
            labelName: InputLabel.LOGIN,
          }),
          new Input({
            inputName: InputName.FIRST_NAME,
            labelName: InputLabel.FIRST_NAME,
          }),
          new Input({
            inputName: InputName.SECOND_NAME,
            labelName: InputLabel.SECOND_NAME,
          }),
          new Input({
            inputName: InputName.PHONE,
            labelName: InputLabel.PHONE,
          }),
          new Input({
            inputName: InputName.PASSWORD,
            labelName: InputLabel.PASSWORD,
            type: 'password',
          }),
          new Input({
            inputName: InputName.CONFIRM,
            labelName: InputLabel.CONFIRM,
            type: 'password',
          }),
        ],
      })});
  }
  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}
export default Registration;
