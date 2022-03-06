import {ComponentEvents} from '../../../../../../shared/types';
import {ChatUser} from '../../../../../../api/chat/types';

export type UserItemProps = ChatUser & {
  events?: ComponentEvents;
}
