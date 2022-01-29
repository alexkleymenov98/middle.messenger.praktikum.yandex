import {TFValidate, TFValidateLength} from './types';

export const emptyValidate:TFValidate = (value)=> {
  if (!value) {
    return {
      isValid: false,
      errorText: 'Поле обязательно для заполнения',
    };
  }
  return {
    isValid: true,
    errorText: '',
  };
};

export const lengthValidate:TFValidateLength = (value, min, max)=>{
  const MIN_LENGTH = min;
  const MAX_LENGTH = max;
  if (MIN_LENGTH > value.length || MAX_LENGTH < value.length) {
    return {
      isValid: false,
      errorText: `Поле должно быть от ${MIN_LENGTH} до ${MAX_LENGTH} символов`,
    };
  }
  return {
    isValid: true,
    errorText: '',
  };
};

export const loginValidate:TFValidate = (value) => {
  if (!emptyValidate(value).isValid) {
    return emptyValidate(value);
  }
  if (!lengthValidate(value, 3, 20).isValid) {
    return lengthValidate(value, 3, 20);
  }
  const regExp = /([A-z]+[0-9-_]*)$/;
  if (!regExp.test(value)) {
    return {
      isValid: false,
      errorText: 'Поле заполнено неверно',
    };
  }

  return {
    isValid: true,
    errorText: '',
  };
};

export const nameValidate:TFValidate = (value) => {
  if (!emptyValidate(value).isValid) {
    return emptyValidate(value);
  }
  const regExp = /^([A-Z|А-Я]+[A-z-А-я]*)$/;
  if (!regExp.test(value)) {
    return {
      isValid: false,
      errorText: 'Поле заполнено неверно',
    };
  }

  return {
    isValid: true,
    errorText: '',
  };
};

export const passwordValidate:TFValidate = (value, compareValue) => {
  if (!emptyValidate(value).isValid) {
    return emptyValidate(value);
  }
  if (!lengthValidate(value, 8, 40).isValid) {
    return lengthValidate(value, 8, 40);
  }

  const regExp = /([A-Z|0-9]+\w*)$/;
  if (!regExp.test(value)) {
    return {
      isValid: false,
      errorText: 'Поле заполнено неверно',
    };
  }
  if (compareValue && compareValue !== value) {
    return {
      isValid: false,
      errorText: 'Поля не совпадают',
    };
  }

  return {
    isValid: true,
    errorText: '',
  };
};

export const phoneValidate:TFValidate = (value) => {
  if (!emptyValidate(value).isValid) {
    return emptyValidate(value);
  }
  if (!lengthValidate(value, 10, 15).isValid) {
    return lengthValidate(value, 10, 15);
  }
  const regExp = /^([+]?[0-9]*)$/;
  if (!regExp.test(value)) {
    return {
      isValid: false,
      errorText: 'Поле заполнено неверно',
    };
  }

  return {
    isValid: true,
    errorText: '',
  };
};

export const emailValidate:TFValidate = (value) => {
  if (!emptyValidate(value).isValid) {
    return emptyValidate(value);
  }

  const regExp = /^([a-z0-9.-]+@[a-z0-9-]+[.]+[a-z]*)$/;
  if (!regExp.test(value)) {
    return {
      isValid: false,
      errorText: 'Поле заполнено неверно',
    };
  }

  return {
    isValid: true,
    errorText: '',
  };
};

