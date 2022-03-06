import {BaseApi} from '../../modules/HTTPTransport';
import {LoginRequestData} from './types';
import {ENDPOINTS} from '../consts';
import {SuccessResponse} from '../../shared/types';

class LoginApi extends BaseApi {
  constructor() {
    super(ENDPOINTS.AUTH.PATH);
  }
  public request(data: LoginRequestData): Promise<SuccessResponse> {
    return this.http.post<SuccessResponse>(ENDPOINTS.AUTH.SIGNIN, {data});
  }
}
export default new LoginApi();
