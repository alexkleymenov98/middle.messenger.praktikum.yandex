const isObject = (value: unknown):boolean =>{
  const type = typeof value;
  return null !== value && type === 'object' && !Array.isArray(value);
};
export default isObject;
