import {TUserResponse} from '../../shared/types';

export type CreateChatRequest = {
  title: string;
};

export type ChatID = {
  chatId: number;
}
export type ChatUser = TUserResponse & {
  role: string;
}

export type UserToChatRequest = {
  users:number[];
} & ChatID;
