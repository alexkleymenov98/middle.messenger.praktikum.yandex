import HTTP, {BaseApi} from '../../modules/HTTPTransport';
import {ENDPOINTS} from '../consts';
import {CreateChatRequest} from './types';

const chatsApiInstance = new HTTP(ENDPOINTS.CHATS.PATH);

class ChatsApi extends BaseApi {
  public request():Promise<string> {
    return chatsApiInstance.get('');
  }

  public create(data: CreateChatRequest):Promise<string> {
    return chatsApiInstance.post('', {data});
  }
}


export default ChatsApi;
