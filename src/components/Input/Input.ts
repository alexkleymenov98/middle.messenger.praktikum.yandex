import Block from '../../modules/Block';
import {InputProps} from './types';
// @ts-ignore
import template from './template.pug';
import {TValidateResult} from '../../modules/Validate/types';
import {InputName} from '../../shared/const';
import validator from '../../modules/Validate';
import {TRenderElement} from '../../modules/Block/types';

class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super({
      isValid: true,
      inputValue: '',
      errorText: '',
      events: {
        focusin: () => this.onFocus(),
        focusout: (e: FocusEvent) => this.onBlur(e),
      },
      ...props,
    });
  }

  onValidate(name: InputName, value: FormDataEntryValue | null, compareValue?: string): TValidateResult | void {
    if (typeof value !== 'string') return;
    const {isValid, errorText} = validator[name](value, compareValue);
    this.onUpdate(value, isValid, errorText);
  }

  onUpdate(value: FormDataEntryValue | null, isValid: boolean, errorText: string): void {
    this.setProps({
      ...this.props,
      isValid,
      errorText,
      inputValue: `${value}`,
    });
  }

  onBlur(event: FocusEvent): void {
    const {name, value} = event.target as HTMLInputElement;
    this.onValidate(name as InputName, value);
  }

  onFocus(): void {
    this.setProps({
      ...this.props,
      isValid: true,
      errorText: '',
    });
    this.getContent().querySelector(`input`)?.focus();
  }

  render(): TRenderElement {
    const {
      inputName,
      inputValue,
      labelName,
      isValid,
      placeholder,
      type = 'text',
      errorText,
    } = this.props;
    return this.compile(template, {
      labelName,
      inputName,
      placeholder,
      type,
      errorText,
      isValid,
      inputValue,
    });
  }
}

export default Input;
