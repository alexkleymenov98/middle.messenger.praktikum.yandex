import Block from '../../modules/Block';
import {FormProps, InputsForm} from './types';
// @ts-ignore
import template from './template.pug';
import {TRenderElement} from '../../modules/Block/types';
import {InputName} from '../../shared/const';
import Input from '../Input';

class Form extends Block<FormProps> {
  constructor(props: FormProps) {
    super({
      [InputName.EMAIL]: null,
      [InputName.LOGIN]: null,
      [InputName.FIRST_NAME]: null,
      [InputName.SECOND_NAME]: null,
      [InputName.DISPLAY_NAME]: null,
      [InputName.PHONE]: null,
      [InputName.PASSWORD]: null,
      [InputName.OLD_PASSWORD]: null,
      [InputName.NEW_PASSWORD]: null,
      [InputName.CONFIRM]: null,
      [InputName.TITLE]: null,
      [InputName.USER_ID]: null,
      ...props,
      events: {
        submit: (event: Event) => this.onSubmit(event),
      },
    });
  }

  isValid(): boolean {
    let compareValue = '';
    const passwords: InputName[] = [InputName.NEW_PASSWORD, InputName.PASSWORD];
    const children = this.getChildren() as InputsForm;
    Object.values(children).forEach((input) => {
      if (input && input instanceof Input) {
        if (input.props.inputName === 'confirm') {
          input.onValidate(input.props.inputName, input.props.inputValue as string, compareValue);
        } else {
          if (passwords.includes(input.props.inputName)) {
            compareValue = input.props.inputValue as string;
          }
          input.onValidate(input.props.inputName, input.props.inputValue as string);
        }
      }
    });

    return Object.values(children)
        .filter((child) => child instanceof Input)
        .every((input) => input && input.props.isValid);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.isValid()) {
      const formData = new FormData(event.target as HTMLFormElement);
      const data: Record<string, string> = {};
      const children = this.getChildren() as InputsForm;
      Object.values(children).forEach((input) => {
        if (input) {
          const inputName = input.props.inputName as FormDataEntryValue | null;
          if (inputName && typeof inputName === 'string') {
            data[inputName] = <string>formData.get(input.props.inputName);
          }
        }
      });
      if (this.props.handlerSubmit) {
        if ('confirm' in data) {
          delete data.confirm;
        }
        this.props.handlerSubmit(data);
      }
    }
  }

  render(): TRenderElement {
    const {submitName = 'Отправить', errorTextForm = '', ...rest} = this.props;
    return this.compile(template, {submitName, errorTextForm, ...rest});
  }
}

export default Form;
