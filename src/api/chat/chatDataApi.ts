import HTTP, {BaseApi} from '../../modules/HTTPTransport';
import {ENDPOINTS} from '../consts';
import {ChatUser, UserToChatRequest} from './types';
import {Success, Token} from '../../shared/types';

const chatsApiInstance = new HTTP(ENDPOINTS.CHATS.PATH);

class ChatDataApi extends BaseApi {
  public request(chatId: number):Promise<ChatUser[]> {
    return chatsApiInstance.get<ChatUser[]>(`/${chatId}${ENDPOINTS.CHATS.USERS}`);
  }

  public getToken(chatId: number):Promise<Token> {
    return chatsApiInstance.post<Token>(`${ENDPOINTS.CHATS.TOKEN}/${chatId}`);
  }

  public update(data:UserToChatRequest):Promise<Success> {
    return chatsApiInstance.put<Success>(ENDPOINTS.CHATS.USERS, {data});
  }

  public delete(data:UserToChatRequest):Promise<Success> {
    return chatsApiInstance.delete<Success>(ENDPOINTS.CHATS.USERS, {data});
  }
}
export default new ChatDataApi();
