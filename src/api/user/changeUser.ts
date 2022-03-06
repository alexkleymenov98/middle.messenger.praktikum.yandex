import {BaseApi} from '../../modules/HTTPTransport';
import {ChangeUserRequest} from './types';
import {ENDPOINTS} from '../consts';
import {TUserResponse} from '../../shared/types';

export class ChangeUser extends BaseApi {
  constructor() {
    super(ENDPOINTS.USER.PATH);
  }
  public request(data: ChangeUserRequest): Promise<TUserResponse> {
    return this.http.put<TUserResponse>(ENDPOINTS.USER.PROFILE, {data});
  }
}
export default new ChangeUser();
