import {TChatResponse, TUserResponse} from '../../shared/types';

export type TStore = {
  errorTextForm: string;
  user: null | TUserResponse;
  chats:TChatResponse[];
}
