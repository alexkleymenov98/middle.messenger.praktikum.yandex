import ChatsApi from '../api/chat/chatsApi';
import {setChats, setErrorTextForm} from '../modules/Store/actions';
import {TStore} from '../modules/Store/types';
import {CreateChatRequest} from '../api/chat/types';

const chatsApiInstance = new ChatsApi();

class ChatsServices {
  public async getChats():Promise<void> {
    try {
      const response = await chatsApiInstance.request();
      setChats(JSON.parse(response) as TStore['chats']);
    } catch (e) {
      console.error(e);
    }
  }
  public async createChat(payload:CreateChatRequest):Promise<void> {
    try {
      await chatsApiInstance.create(payload);
      await this.getChats();
    } catch (e) {
      setErrorTextForm(e.reason);
    }
  }
}
export default ChatsServices;
