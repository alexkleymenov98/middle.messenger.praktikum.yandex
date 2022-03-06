import HTTP from '../HTTPTransport';

export class BaseApi {
  http: HTTP;

  constructor(baseUrl: string, isFile = false) {
    this.http = new HTTP(baseUrl, isFile);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(param: unknown): Promise<unknown> {
    throw new Error('Not implemented');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  request(param?: unknown): void | Promise<unknown> {
    throw new Error('Not implemented');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(param: unknown): void | Promise<unknown> {
    throw new Error('Not implemented');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delete(param?: unknown): void {
    throw new Error('Not implemented');
  }
}
