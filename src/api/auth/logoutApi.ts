import HTTP, {BaseApi} from '../../modules/HTTPTransport';
import {ENDPOINTS} from '../consts';
import {Success} from '../../shared/types';

const authApiInstance = new HTTP(ENDPOINTS.AUTH.PATH);

class LogoutApi extends BaseApi {
  public request():Promise<Success> {
    return authApiInstance.post<Success>(ENDPOINTS.AUTH.LOGOUT, );
  }
}
export default new LogoutApi();
