import {BaseApi} from '../../modules/HTTPTransport';
import {ChangePasswordRequest} from './types';
import {ENDPOINTS} from '../consts';
import {SuccessResponse} from '../../shared/types';

export class ChangeUserPassword extends BaseApi {
  constructor() {
    super(ENDPOINTS.USER.PATH);
  }
  public request(data:ChangePasswordRequest):Promise<SuccessResponse> {
    return this.http.put<SuccessResponse>(ENDPOINTS.USER.PASSWORD, {data});
  }
}
export default new ChangeUserPassword();
