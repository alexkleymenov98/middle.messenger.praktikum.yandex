import Input from '../Input';
import {ComponentEvents} from '../../shared/types';
import {InputName} from '../../shared/const';
import Link from '../Link';

type TInputs = Record<InputName, Input | null>;

export type InputsForm = Omit<TInputs, 'message'>

export type FormProps = Partial<InputsForm> & {
  submitName: string;
  link?: Link | null;
  handlerSubmit?: (param: Record<string, string>) => void;
  events?: ComponentEvents;
  errorTextForm?: string;
};
