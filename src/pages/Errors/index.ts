import Errors from './errors';

export class Error404 extends Errors {
  constructor() {
    super({code: 404, text: 'Не туда попали'});
  }
}
