import {ComponentEvents} from '../../../../shared/types';

export type ChatItemProps = {
  chatId: number;
  title: string;
  last_message: string;
  unread_count: string;
  time: string;
  events?: ComponentEvents;
};
