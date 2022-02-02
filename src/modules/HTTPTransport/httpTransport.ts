import {Options, METHODS, OptionsWithoutMethod} from './types';

function queryStringify(data:Object) {
  // Можно делать трансформацию GET-параметров в отдельной функции
  let result = '';
  Object.entries(data).forEach(([key, value], index)=>{
    if (index === 0) {
      result = '?';
    } else {
      result = `${result}&`;
    }
    result = `${result}${key}=${value}`;
  });
  return result;
}

class HTTPTransport {
  get = (url:string, options:OptionsWithoutMethod = {}):Promise<XMLHttpRequest> => {
    const urlWithData = `${url}${options.data ? queryStringify(options.data):''}`;
    return this.request(urlWithData, {...options, method: METHODS.GET}, options.timeout);
  };
  put = (url:string, options:OptionsWithoutMethod = {}):Promise<XMLHttpRequest> => {
    return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
  };
  post = (url:string, options:OptionsWithoutMethod = {}):Promise<XMLHttpRequest> => {
    return this.request(url, {...options, method: METHODS.POST}, options.timeout);
  };
  delete = (url:string, options:OptionsWithoutMethod = {}):Promise<XMLHttpRequest> => {
    return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
  };

  request = (url:string, options:Options, timeout = 5000):Promise<XMLHttpRequest> => {
    const {method, data, headers = {}} = options;
    return new Promise((resolve, reject)=>{
      const xhr = new XMLHttpRequest();
      xhr.open(method as string, url);

      Object.entries(headers).forEach(([key, value])=>{
        xhr.setRequestHeader(key, value);
      });

      xhr.onload = function() {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (!data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
export default HTTPTransport;
