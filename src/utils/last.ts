function last<T>(list:T[]):T|undefined {
  if (Array.isArray(list) && list.length) {
    return list[list.length -1];
  }
  return undefined;
}

export default last;

