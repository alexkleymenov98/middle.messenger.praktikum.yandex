import {TStore} from '../../modules/Store/types';
import Form from '../Form/form';
import {ComponentEvents} from '../../shared/types';

export type ModalProps = {
  events?: ComponentEvents;
  typeModal: TStore['modal']['type'];
  content: Form;
} & Partial<TStore['modal']>;
