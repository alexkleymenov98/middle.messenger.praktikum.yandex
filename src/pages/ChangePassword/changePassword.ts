import Block from '../../modules/Block';
import {ChangePasswordProps} from './types';
import Form from '../../components/Form';
import {BUTTON_NAME, InputLabel, InputName, RouterLinks, RouterLinksName} from '../../shared/const';
import Input from '../../components/Input';
import template from '../../layouts/Page';
import {TRenderElement} from '../../modules/Block/types';

class ChangePassword extends Block<ChangePasswordProps> {
  constructor(props:Partial<ChangePasswordProps>) {
    super({...props,
      title: 'Изменить пароль',
      content: new Form({submitName: BUTTON_NAME.SAVE,
        linkName: RouterLinksName.PROFILE_BACK,
        linkPath: RouterLinks.PROFILE,
        content: [
          new Input({
            inputName: InputName.OLD_PASSWORD,
            labelName: InputLabel.OLD_PASSWORD,
            type: 'password',
          }),
          new Input({
            inputName: InputName.NEW_PASSWORD,
            labelName: InputLabel.NEW_PASSWORD,
            type: 'password',
          }),
          new Input({
            inputName: InputName.CONFIRM,
            labelName: InputLabel.CONFIRM_NEW,
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
export default ChangePassword;
