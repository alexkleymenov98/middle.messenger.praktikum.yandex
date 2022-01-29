import {ComponentEvents} from '../../../../shared/types';
import {InputName} from '../../../../shared/const';

export type MessageFormProps = {
  iconSubmit:string;
  iconSettingFile:string;
  inputName:InputName;
  placeholder?:string;
  events:ComponentEvents;
}
