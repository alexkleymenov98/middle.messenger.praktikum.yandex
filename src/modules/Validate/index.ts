import {
  emailValidate,
  emptyValidate,
  loginValidate,
  nameValidate,
  passwordValidate,
  phoneValidate,
} from './validate';
import {TValidate} from './types';
import {InputName} from '../../shared/const';

const validator:TValidate = {
  [InputName.LOGIN]: loginValidate,
  [InputName.PASSWORD]: passwordValidate,
  [InputName.CONFIRM]: passwordValidate,
  [InputName.FIRST_NAME]: nameValidate,
  [InputName.SECOND_NAME]: nameValidate,
  [InputName.DISPLAY_NAME]: emptyValidate,
  [InputName.PHONE]: phoneValidate,
  [InputName.EMAIL]: emailValidate,
  [InputName.NEW_PASSWORD]: passwordValidate,
  [InputName.OLD_PASSWORD]: passwordValidate,
  [InputName.MESSAGE]: emptyValidate,
};

export default validator;

