import Block from '../../modules/Block';
import {ChangeProfileProps} from './types';
import Form from '../../components/Form';
import {BUTTON_NAME, InputLabel, InputName, RouterLinks, RouterLinksName} from '../../shared/const';
import Input from '../../components/Input';
import {TRenderElement} from '../../modules/Block/types';
import Link from '../../components/Link';
import UserServices from '../../services/userServices';
import {ChangeUserRequest} from '../../api/user/types';

const template = require('../../layouts/Page/template.pug');

class ChangeProfile extends Block {
  constructor({user}: Partial<ChangeProfileProps>) {
    super({
      title: 'Изменить профиль',
      content: new Form({
        submitName: BUTTON_NAME.SAVE,
        handlerSubmit: (values: ChangeUserRequest) => {
          UserServices.updateUser(values);
        },
        link: new Link({
          path: RouterLinks.PROFILE,
          label: RouterLinksName.PROFILE_BACK,
        }),
        [InputName.FIRST_NAME]: new Input({
          inputName: InputName.FIRST_NAME,
          labelName: InputLabel.FIRST_NAME,
          inputValue: user?.first_name ?? '',
        }),
        [InputName.SECOND_NAME]: new Input({
          inputName: InputName.SECOND_NAME,
          labelName: InputLabel.SECOND_NAME,
          inputValue: user?.second_name ?? '',
        }),
        [InputName.DISPLAY_NAME]: new Input({
          inputName: InputName.DISPLAY_NAME,
          labelName: InputLabel.DISPLAY_NAME,
          inputValue: user?.display_name ?? '',
        }),
        [InputName.LOGIN]: new Input({
          inputName: InputName.LOGIN,
          labelName: InputLabel.LOGIN,
          inputValue: user?.login ?? '',
        }),
        [InputName.EMAIL]: new Input({
          inputName: InputName.EMAIL,
          labelName: InputLabel.EMAIL,
          inputValue: user?.email ?? '',
        }),
        [InputName.PHONE]: new Input({
          inputName: InputName.PHONE,
          labelName: InputLabel.PHONE,
          inputValue: user?.phone ?? '',
        }),
      }),
    });
  }

  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}

export default ChangeProfile;
