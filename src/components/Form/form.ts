import Block from '../../modules/Block';
import {FormProps} from './types';
import {template} from './template';
import Input from '../Input';
import {TRenderElement} from '../../modules/Block/types';
import {InputName} from '../../shared/const';

class Form extends Block<FormProps> {
  constructor(props:FormProps) {
    super({
      ...props,
      events: {
        submit: (event: Event) => this.onSubmit(event),
      },
    });
  }

  onValid():boolean {
    let isValidForm = true;
    const children = this.getChildren()?.content as Input[];
    if (Array.isArray(children)) {
      const passwords:InputName[] = [InputName.NEW_PASSWORD, InputName.PASSWORD];
      let compareValue = '';
      children.forEach((item)=>{
        if (item.props.inputName === 'confirm') {
          item.onUpdate(item.props.inputName, item.props.inputValue as string, compareValue);
        } else {
          if (passwords.includes(item.props.inputName)) {
            compareValue = item.props.inputValue as string;
          }
          item.onUpdate(item.props.inputName, item.props.inputValue as string);
        }
      });
      children.forEach((item)=>{
        if (!item.props.isValid) {
          isValidForm = false;
        }
      });
    }
    return isValidForm;
  }

  onSubmit(event:Event):void {
    event.preventDefault();
    if (this.onValid()) {
      const formData = new FormData(event.target as HTMLFormElement);
      const data:Record<string, string> = {};
      const inputs = this.getChildren()?.content;
      if (Array.isArray(inputs)) {
        inputs.forEach((input)=>{
          const inputName = input.props.inputName as FormDataEntryValue | null;
          if (inputName && typeof inputName === 'string') {
            data[inputName] = <string>formData.get(input.props.inputName);
          }
        });
        console.log(data);
      }
    }
  }

  render(): TRenderElement {
    const {submitName = 'Отправить', ...rest} = this.props;
    return this.compile(template, {submitName, ...rest});
  }
}
export default Form;
