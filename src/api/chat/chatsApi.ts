import {BaseApi} from '../../modules/HTTPTransport';
import {ENDPOINTS} from '../consts';
import {ChatID, CreateChatRequest} from './types';
import {SuccessResponse, TChatResponse} from '../../shared/types';

class ChatsApi extends BaseApi {
  constructor() {
    super(ENDPOINTS.CHATS.PATH);
  }
  public request(): Promise<TChatResponse[]> {
    return this.http.get<TChatResponse[]>('');
  }

  public create(data: CreateChatRequest): Promise<SuccessResponse> {
    return this.http.post('', {data});
  }

  public delete(data:ChatID): Promise<SuccessResponse> {
    return this.http.delete<SuccessResponse>('', {data});
  }
}

export default new ChatsApi();
