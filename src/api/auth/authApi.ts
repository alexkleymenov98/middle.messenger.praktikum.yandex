import {BaseApi} from '../../modules/HTTPTransport';
import {ENDPOINTS} from '../consts';
import {TUserResponse} from '../../shared/types';

class AuthApi extends BaseApi {
  constructor() {
    super(ENDPOINTS.AUTH.PATH);
  }
  request(): Promise<TUserResponse> {
    return this.http.get<TUserResponse>(ENDPOINTS.AUTH.USER);
  }
}

export default new AuthApi();
