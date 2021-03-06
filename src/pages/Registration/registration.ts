import Block from '../../modules/Block';
import {RegistrationProps} from './types';
import Form from '../../components/Form/form';
import {BUTTON_NAME, InputLabel, InputName, RouterLinks, RouterLinksName} from '../../shared/const';
import Input from '../../components/Input';
import {TRenderElement} from '../../modules/Block/types';
import Link from '../../components/Link';
import AuthServices from '../../services/authServices';
import {SignUpRequestData} from '../../api/auth/types';
const template = require('../../layouts/Page/template.pug');

class Registration extends Block<RegistrationProps> {
  constructor(props: Partial<RegistrationProps>) {
    super({
      ...props,
      title: 'Регистрация',
      content: new Form({
        link: new Link({
          label: RouterLinksName.LOGIN,
          path: RouterLinks.LOGIN,
        }),
        submitName: BUTTON_NAME.REGISTRATION,
        handlerSubmit: (values: SignUpRequestData) => {
          AuthServices.singUp(values as SignUpRequestData);
        },
        [InputName.EMAIL]: new Input({
          inputName: InputName.EMAIL,
          labelName: InputLabel.EMAIL,
        }),
        [InputName.LOGIN]: new Input({
          inputName: InputName.LOGIN,
          labelName: InputLabel.LOGIN,
        }),
        [InputName.FIRST_NAME]: new Input({
          inputName: InputName.FIRST_NAME,
          labelName: InputLabel.FIRST_NAME,
        }),
        [InputName.SECOND_NAME]: new Input({
          inputName: InputName.SECOND_NAME,
          labelName: InputLabel.SECOND_NAME,
        }),
        [InputName.PHONE]: new Input({
          inputName: InputName.PHONE,
          labelName: InputLabel.PHONE,
        }),
        [InputName.PASSWORD]: new Input({
          inputName: InputName.PASSWORD,
          labelName: InputLabel.PASSWORD,
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
    return this.compile(template, this.props);
  }
}

export default Registration;
