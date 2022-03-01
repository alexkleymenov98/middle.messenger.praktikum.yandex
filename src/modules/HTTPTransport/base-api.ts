
export class BaseApi {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(param: unknown): Promise<unknown> {
    throw new Error('Not implemented');
  }
  request(param?:unknown): void | Promise<unknown> {
    throw new Error('Not implemented');
  }
  update(param:unknown):void | Promise<unknown> {
    throw new Error('Not implemented');
  }
  delete(param?:unknown): void {
    throw new Error('Not implemented');
  }
}
