import {ComponentEvents} from '../../shared/types';
import {InputName} from '../../shared/const';

export type InputProps = {
  labelName: string;
  inputName: InputName;
  placeholder?: string;
  type?: string;
  errorText?: string;
  isValid?: boolean;
  inputValue?: string;
  events?: ComponentEvents;
};
