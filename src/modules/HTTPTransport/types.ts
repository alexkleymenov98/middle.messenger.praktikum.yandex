export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type Options = {
  headers?: Record<string, string>;
  method: METHODS;
  timeout?: number;
  data?: any;
};

export type OptionsWithoutMethod = Omit<Options, 'method'>;
