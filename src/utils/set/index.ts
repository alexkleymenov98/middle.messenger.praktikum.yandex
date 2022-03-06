import {Indexed} from '../../shared/types';
import merge from '../merge';
import isObject from '../isObject';

function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof path !== 'string') {
    new Error('path must be string');
  }

  if (!isObject(object)) {
    return object;
  }

  const rhs = path.split('.').reduceRight<Indexed>((acc, key, index, array)=>{
    if (array.length - 1 === index) {
      acc = {[key]: value};
    } else {
      acc = {[key]: acc};
    }
    return acc;
  }, {});
  return merge(object as Indexed, rhs);
}

export default set;
