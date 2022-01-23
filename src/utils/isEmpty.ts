type TEmptyValue = number | string | boolean | null | undefined | object;
function isEmpty(value:TEmptyValue):boolean|void {
  const typesName = ['number', 'boolean'];
  const types:(null | undefined)[] = [null, undefined];
  if (typesName.includes(typeof value) || types.includes(value as undefined | null) ) {
    return true;
  }
  if (typeof value === 'string') {
    return value === '';
  }
  if (Array.isArray(value)) {
    return !value.length;
  }
  if (value instanceof Map || value instanceof Set) {
    return !value.size;
  }
  if (typeof value === 'object') {
    return !Object.keys(value as object).length;
  }
}

export default isEmpty;
