import Form from '../../components/Form';
import Block from '../../modules/Block';
import {LoginProps} from './types';
import {BUTTON_NAME, InputLabel, InputName, RouterLinks, RouterLinksName} from '../../shared/const';
import Input from '../../components/Input';
import template from '../../layouts/Page/template.pug';
import {TRenderElement} from '../../modules/Block/types';
import Link from '../../components/Link';
import AuthServices from '../../services/authServices';
import {LoginRequest} from '../../api/auth/types';


class Login extends Block<LoginProps> {
  constructor(props:Partial<LoginProps>) {
    super({...props,
      title: 'Вход',
      content: new Form({
        submitName: BUTTON_NAME.LOGIN,
        handlerSubmit: (values)=>{
          new AuthServices().login(values as LoginRequest);
        },
        link:
          new Link(
              {label: RouterLinksName.REGISTRATION,
                path: RouterLinks.REGISTRATION}),
        login: new Input({
          inputName: InputName.LOGIN,
          labelName: InputLabel.LOGIN,
        }),
        password: new Input({
          inputName: InputName.PASSWORD,
          labelName: InputLabel.PASSWORD,
          type: 'password',
        }),
      })});
  }
  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}

export default Login;
