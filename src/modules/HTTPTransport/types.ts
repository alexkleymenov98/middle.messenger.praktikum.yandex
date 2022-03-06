export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type Options<T = any> = {
  headers?: Record<string, string>;
  method: METHODS;
  timeout?: number;
  data?: T;
};

export type OptionsWithoutMethod = Omit<Options, 'method'>;
