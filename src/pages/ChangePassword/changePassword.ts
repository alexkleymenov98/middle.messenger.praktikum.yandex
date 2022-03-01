import Block from '../../modules/Block';
import {ChangePasswordProps} from './types';
import Form from '../../components/Form';
import {BUTTON_NAME, InputLabel, InputName, RouterLinks, RouterLinksName} from '../../shared/const';
import Input from '../../components/Input';
import template from '../../layouts/Page/template.pug';
import {TRenderElement} from '../../modules/Block/types';
import Link from '../../components/Link';
import {ChangePasswordRequest} from '../../api/user/types';
import UserServices from '../../services/userServices';

class ChangePassword extends Block<ChangePasswordProps> {
  constructor(props: Partial<ChangePasswordProps>) {
    super({
      ...props,
      title: 'Изменить пароль',
      content: new Form({
        submitName: BUTTON_NAME.SAVE,
        handlerSubmit: (values: ChangePasswordRequest) => {
          UserServices.updateUserPassword(values);
        },
        link: new Link({
          path: RouterLinks.PROFILE,
          label: RouterLinksName.PROFILE_BACK,
        }),
        [InputName.OLD_PASSWORD]: new Input({
          inputName: InputName.OLD_PASSWORD,
          labelName: InputLabel.OLD_PASSWORD,
          type: 'password',
        }),
        [InputName.NEW_PASSWORD]: new Input({
          inputName: InputName.NEW_PASSWORD,
          labelName: InputLabel.NEW_PASSWORD,
          type: 'password',
        }),
        [InputName.CONFIRM]: new Input({
          inputName: InputName.CONFIRM,
          labelName: InputLabel.CONFIRM,
          type: 'password',
        }),
      }),
    });
  }

  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}

export default ChangePassword;
