import queryStringify from './queryStringify';
import {Options, METHODS, OptionsWithoutMethod} from './types';
import {ENDPOINTS} from '../../api/consts';


class HTTPTransport {
  baseUrl:string = ENDPOINTS.HTTP;
  isFile:boolean = false;
  constructor(urlSection:string, file?:boolean) {
    this.baseUrl += urlSection;
    if (file) {
      this.isFile = file;
    }
  }
  get = (url:string, options:OptionsWithoutMethod = {}):Promise<string> => {
    const urlWithData = `${url}${options.data ? queryStringify(options.data):''}`;
    return this.request(urlWithData, {...options, method: METHODS.GET}, options.timeout);
  };
  put = (url:string, options:OptionsWithoutMethod = {}):Promise<string> => {
    return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
  };
  post = (url:string, options:OptionsWithoutMethod = {}):Promise<string> => {
    return this.request(url, {...options, method: METHODS.POST}, options.timeout);
  };
  delete = (url:string, options:OptionsWithoutMethod = {}):Promise<string> => {
    return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
  };

  request = (url:string, options:Options, timeout = 5000):Promise<string> => {
    const {method, data, headers = this.isFile ? {}:{'content-type': 'application/json'}} = options;
    return new Promise((resolve, reject)=>{
      const xhr = new XMLHttpRequest();
      xhr.open(method as string, `${this.baseUrl}${url}`);
      xhr.withCredentials = true;
      Object.entries(headers).forEach(([key, value])=>{
        xhr.setRequestHeader(key, value);
      });

      xhr.onload = function() {
        const {status, response} = xhr;
        if ([200, 201].includes(status)) {
          return resolve(response);
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        return reject(JSON.parse(response));
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (!data) {
        xhr.send();
      } else {
        xhr.send(this.isFile ? data : JSON.stringify(data));
      }
    });
  };
}
export default HTTPTransport;
