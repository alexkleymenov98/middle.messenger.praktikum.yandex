import {ComponentEvents} from '../../../../shared/types';
import {InputName} from '../../../../shared/const';

export type MessageFormProps = {
  inputName: InputName;
  placeholder?: string;
  events: ComponentEvents;
}
