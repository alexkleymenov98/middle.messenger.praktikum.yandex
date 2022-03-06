import {TUserResponse} from '../../shared/types';

export type ChangeUserRequest = Pick<TUserResponse, 'display_name' | 'first_name' | 'second_name' | 'phone' | 'email' | 'login'>;

export type ChangePasswordRequest = {
  oldPassword: string;
  newPassword: string;
}
