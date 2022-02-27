import {ChangePasswordRequest, ChangeUserRequest} from '../api/user/types';
import ChangeUser from '../api/user/changeUser';
import {setErrorTextForm, setUser} from '../modules/Store/actions';
import {TUserResponse} from '../shared/types';
import Router from '../modules/Router';
import {RouterLinks} from '../shared/const';
import ChangeUserPassword from '../api/user/ChangeUserPassword';
import ChangeUserAvatar from '../api/user/ChangeUserAvatar';

const changeUserInstance = new ChangeUser();
const changeUserPasswordInstance = new ChangeUserPassword();
const changeUserAvatarInstance = new ChangeUserAvatar();

class UserServices {
  public async updateUser(payload:ChangeUserRequest):Promise<void> {
    try {
      const response = await changeUserInstance.request(payload) as unknown as string;
      setUser(JSON.parse(response) as TUserResponse);
      Router.go(RouterLinks.PROFILE);
    } catch (e) {
      setErrorTextForm(e.reason);
    }
  }

  public async updateUserPassword(payload:ChangePasswordRequest):Promise<void> {
    try {
      await changeUserPasswordInstance.request(payload);
      Router.go(RouterLinks.PROFILE);
      setErrorTextForm('');
    } catch (e) {
      setErrorTextForm(e.reason);
    }
  }

  public async updateUserAvatar(payload:FormData):Promise<void> {
    try {
      const response = await changeUserAvatarInstance.request(payload) as unknown as string;
      setUser(JSON.parse(response) as TUserResponse);
    } catch (e) {
      setErrorTextForm(e.reason);
    }
  }
}
export default UserServices;
