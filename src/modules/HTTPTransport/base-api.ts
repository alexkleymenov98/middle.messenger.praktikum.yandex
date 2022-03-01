
export class BaseApi {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(param: unknown): Promise<unknown> {
    throw new Error('Not implemented');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  request(param?:unknown): void | Promise<unknown> {
    throw new Error('Not implemented');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(param:unknown):void | Promise<unknown> {
    throw new Error('Not implemented');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delete(param?:unknown): void {
    throw new Error('Not implemented');
  }
}
