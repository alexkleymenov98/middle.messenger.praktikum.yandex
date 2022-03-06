import isObject from '../isObject';

export const isEqual = <T = object>(value:T, compare:T):boolean=>{
  if (isObject(value) && isObject(compare)) {
    let result = true;
    for (const p in value) {
      if (isObject(value[p])) {
        result = isEqual(value[p], compare[p]);
      } else {
        const valueD = value[p];
        const compareD = compare[p];
        if (Array.isArray(valueD) && Array.isArray(compareD)) {
          if (valueD.length !== compareD.length) {
            result = false;
          } else {
            const merge = valueD.filter((v, i)=>v !== compareD[i]);
            if (merge.length) {
              result = false;
            }
          }
        } else {
          if (value[p] !== compare[p]) {
            result = false;
          }
        }
      }
    }
    return result;
  }
  return value === compare;
};

export default isEqual;
