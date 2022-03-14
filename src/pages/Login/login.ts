import Form from '../../components/Form';
import Block from '../../modules/Block';
import {LoginProps} from './types';
import {BUTTON_NAME, InputLabel, InputName, RouterLinks, RouterLinksName} from '../../shared/const';
import Input from '../../components/Input';
import {TRenderElement} from '../../modules/Block/types';
import Link from '../../components/Link';
import AuthServices from '../../services/authServices';
import {LoginRequestData} from '../../api/auth/types';
const template = require('../../layouts/Page/template.pug');


class Login extends Block<LoginProps> {
  constructor(props: LoginProps) {
    super({
      ...props,
      title: 'Вход',
      content: new Form({
        submitName: BUTTON_NAME.LOGIN,
        handlerSubmit: (values: LoginRequestData) => {
          AuthServices.login(values as LoginRequestData);
        },
        link:
          new Link(
              {
                label: RouterLinksName.REGISTRATION,
                path: RouterLinks.REGISTRATION,
              }),
        login: new Input({
          inputName: InputName.LOGIN,
          labelName: InputLabel.LOGIN,
        }),
        password: new Input({
          inputName: InputName.PASSWORD,
          labelName: InputLabel.PASSWORD,
          type: 'password',
        }),
      }),
    });
  }

  render(): TRenderElement {
    return this.compile(template, this.props);
  }
}
export default Login;
