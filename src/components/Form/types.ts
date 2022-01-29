import Input from '../InputField';
import {ComponentEvents} from '../../shared/types';

export type FormProps = {
  submitName:string;
  linkName?:string;
  linkPath?:string;
  content:Input[];
  events?:ComponentEvents;
};
