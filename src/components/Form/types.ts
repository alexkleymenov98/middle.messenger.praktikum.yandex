import Input from '../Input';
import {ComponentEvents} from '../../shared/types';
import {InputName} from '../../shared/const';

type TInputs = Record<InputName, Input | null>;

export type InputsForm = Omit<TInputs, 'message'>


export type FormProps = Partial<InputsForm> & {
    submitName:string;
    linkName?:string;
    linkPath?:string;
    events?:ComponentEvents;
};
