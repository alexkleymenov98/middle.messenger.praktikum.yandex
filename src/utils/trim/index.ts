type TFTrim = (value: string, chars?: string) => string;


const trim: TFTrim = (value, chars) => {
  let result = value;
  if (chars) {
    for (const item of chars) {
      result = result.replace(new RegExp(item, 'gi'), '');
    }
  }
  return result.trim();
};
export default trim;
