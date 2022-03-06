import {BaseApi} from '../../modules/HTTPTransport';
import {SignUpRequestData} from './types';
import {ENDPOINTS} from '../consts';
import {TID} from '../../shared/types';

class SignUpApi extends BaseApi {
  constructor() {
    super(ENDPOINTS.AUTH.PATH);
  }
  public request(data: SignUpRequestData): Promise<TID> {
    return this.http.post<TID>(ENDPOINTS.AUTH.SIGNUP, {data});
  }
}
export default new SignUpApi();
