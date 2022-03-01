import {MessageResponse, TChatResponse, TUserResponse} from '../../shared/types';
import {ChatUser} from '../../api/chat/types';

type TActiveChat = {
  chatId: number | null;
  users:ChatUser[];
  token:string;
  messageList: MessageResponse[] | null;
};

export type TStore = {
  errorTextForm: string;
  user: null | TUserResponse;
  chats:TChatResponse[];
  activeChat: TActiveChat | null;
  modal:{
    isShow: boolean;
    type: 'createChat'| 'addUser'| null;
  }
}
