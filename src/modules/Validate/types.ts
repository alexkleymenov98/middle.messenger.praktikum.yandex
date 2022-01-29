import {InputName} from '../../shared/const';

export type TValidateResult = {isValid:boolean, errorText:string}

export type TFValidate = (value:string, compareValue?:string)=>TValidateResult;

export type TFValidateLength = (value:string, min:number, max:number)=>TValidateResult;

export type TValidate = Record<InputName, TFValidate>;
