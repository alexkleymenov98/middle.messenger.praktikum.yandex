import {BaseApi} from '../../modules/HTTPTransport';
import {ENDPOINTS} from '../consts';
import {TUserResponse} from '../../shared/types';

export class ChangeUserAvatar extends BaseApi {
  constructor() {
    super(ENDPOINTS.USER.PATH, true);
  }
  public request(data: FormData): Promise<TUserResponse> {
    return this.http.put<TUserResponse>(ENDPOINTS.USER.AVATAR, {data});
  }
}
export default new ChangeUserAvatar();
