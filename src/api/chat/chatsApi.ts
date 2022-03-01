import HTTP, {BaseApi} from '../../modules/HTTPTransport';
import {ENDPOINTS} from '../consts';
import {ChatID, CreateChatRequest} from './types';
import {Success, TChatResponse} from '../../shared/types';

const chatsApiInstance = new HTTP(ENDPOINTS.CHATS.PATH);

class ChatsApi extends BaseApi {
  public request():Promise<TChatResponse[]> {
    return chatsApiInstance.get<TChatResponse[]>('');
  }

  public create(data: CreateChatRequest):Promise<Success> {
    return chatsApiInstance.post('', {data});
  }

  public delete(data:ChatID):Promise<Success> {
    return chatsApiInstance.delete<Success>('', {data});
  }
}


export default new ChatsApi();
