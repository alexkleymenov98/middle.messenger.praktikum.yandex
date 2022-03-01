import HTTP, {BaseApi} from '../../modules/HTTPTransport';
import {SignUpRequest} from './types';
import {ENDPOINTS} from '../consts';
import {TID} from '../../shared/types';

const authApiInstance = new HTTP(ENDPOINTS.AUTH.PATH);

class SignUpApi extends BaseApi {
  public request(data:SignUpRequest):Promise<TID> {
    return authApiInstance.post<TID>(ENDPOINTS.AUTH.SIGNUP, {data});
  }
}
export default new SignUpApi();
