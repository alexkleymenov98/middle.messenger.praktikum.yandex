import HTTP from '../HTTPTransport';


export class BaseApi {
  http: HTTP;

  constructor(baseUrl: string, isFile = false) {
    this.http = new HTTP(baseUrl, isFile);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  create(p?:any):Promise<any> {
    console.log(p);
    throw new Error('Not implemented');
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  request(p?:any): Promise<any> {
    console.log(p);
    throw new Error('Not implemented');
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  update(p?:any): Promise<any> {
    console.log(p);
    throw new Error('Not implemented');
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  delete(p?:any): Promise<any> {
    console.log(p);
    throw new Error('Not implemented');
  }
}
