import HTTP from '../HTTPTransport';


export class BaseApi {
  http: HTTP;

  constructor(baseUrl: string, isFile = false) {
    this.http = new HTTP(baseUrl, isFile);
  }

  create(p?:any):Promise<any> {
    console.log(p);
    throw new Error('Not implemented');
  }

  request(p?:any): Promise<any> {
    console.log(p);
    throw new Error('Not implemented');
  }

  update(p?:any): Promise<any> {
    console.log(p);
    throw new Error('Not implemented');
  }

  delete(p?:any): Promise<any> {
    console.log(p);
    throw new Error('Not implemented');
  }
}
