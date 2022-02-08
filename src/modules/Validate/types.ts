import {InputName} from '../../shared/const';

export type TValidateResult = {
  isValid: boolean;
  errorText: string;
}

export type TFValidate = (value: string, compareValue?: string)=>TValidateResult;

export type TFValidateLength = (value: string, minLength: number, maxLength: number)=>TValidateResult;

export type TValidate = Record<InputName, TFValidate>;
