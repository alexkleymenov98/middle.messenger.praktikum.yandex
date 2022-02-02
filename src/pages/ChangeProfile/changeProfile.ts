import Block from '../../modules/Block';
import {ChangeProfileProps} from './types';
import Form from '../../components/Form';
import {BUTTON_NAME, InputLabel, InputName, RouterLinks, RouterLinksName} from '../../shared/const';
import Input from '../../components/Input';
import template from '../../layouts/Page/template.pug';
import {TRenderElement} from '../../modules/Block/types';

class ChangeProfile extends Block<ChangeProfileProps> {
  constructor(props: Partial<ChangeProfileProps>) {
    super({
      ...props,
      title: 'Изменить профиль',
      content: new Form({
        submitName: BUTTON_NAME.SAVE,
        linkName: RouterLinksName.PROFILE_BACK,
        linkPath: RouterLinks.PROFILE,
        [InputName.FIRST_NAME]: new Input({
          inputName: InputName.FIRST_NAME,
          labelName: InputLabel.FIRST_NAME,
          inputValue: 'Иван',
        }),
        [InputName.SECOND_NAME]: new Input({
          inputName: InputName.SECOND_NAME,
          labelName: InputLabel.SECOND_NAME,
          inputValue: 'Иванов',
        }),
        [InputName.DISPLAY_NAME]: new Input({
          inputName: InputName.DISPLAY_NAME,
          labelName: InputLabel.DISPLAY_NAME,
          inputValue: 'Иван',
        }),
        [InputName.LOGIN]: new Input({
          inputName: InputName.LOGIN,
          labelName: InputLabel.LOGIN,
          inputValue: 'ivanIvanov',
        }),
        [InputName.EMAIL]: new Input({
          inputName: InputName.EMAIL,
          labelName: InputLabel.EMAIL,
          inputValue: 'ivanivanov@mail.ru',
        }),
        [InputName.PHONE]: new Input({
          inputName: InputName.PHONE,
          labelName: InputLabel.PHONE,
          inputValue: '+7 (909) 967 30 30',
        }),
      }),
    });
  }

  render(): TRenderElement {
    const props = this.props;
    return this.compile(template, props);
  }
}
export default ChangeProfile;
