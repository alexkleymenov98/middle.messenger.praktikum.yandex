import HTTP, {BaseApi} from '../../modules/HTTPTransport';
import {LoginRequest} from './types';
import {ENDPOINTS} from '../consts';
import {Success} from '../../shared/types';

const authApiInstance = new HTTP(ENDPOINTS.AUTH.PATH);

class LoginApi extends BaseApi {
  public request(data:LoginRequest): Promise<Success> {
    return authApiInstance.post<Success>(ENDPOINTS.AUTH.SIGNIN, {data});
  }
}
export default new LoginApi();
