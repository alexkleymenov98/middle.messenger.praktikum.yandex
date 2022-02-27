
export class BaseApi {
  create(param:unknown): Promise<unknown> {
    throw new Error('Not implemented');
  }
  request(param?:unknown): void | Promise<unknown> {
    throw new Error('Not implemented');
  }
  update(): void {
    throw new Error('Not implemented');
  }
  delete(): void {
    throw new Error('Not implemented');
  }
}
