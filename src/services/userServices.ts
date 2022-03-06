import {ChangePasswordRequest, ChangeUserRequest} from '../api/user/types';
import ChangeUser from '../api/user/changeUser';
import {setErrorTextForm, setUser} from '../modules/Store/actions';
import Router from '../modules/Router';
import {RouterLinks} from '../shared/const';
import ChangeUserPassword from '../api/user/ChangeUserPassword';
import ChangeUserAvatar from '../api/user/ChangeUserAvatar';


class UserServices {
  public async updateUser(payload: ChangeUserRequest): Promise<void> {
    try {
      const response = await ChangeUser.request(payload);
      setUser(response);
      Router.go(RouterLinks.PROFILE);
    } catch (e) {
      setErrorTextForm(e.reason);
    }
  }

  public async updateUserPassword(payload: ChangePasswordRequest): Promise<void> {
    try {
      await ChangeUserPassword.request(payload);
      Router.go(RouterLinks.PROFILE);
      setErrorTextForm('');
    } catch (e) {
      setErrorTextForm(e.reason);
    }
  }

  public async updateUserAvatar(payload: FormData): Promise<void> {
    try {
      const response = await ChangeUserAvatar.request(payload);
      setUser(response);
    } catch (e) {
      setErrorTextForm(e.reason);
    }
  }
}

export default new UserServices();
