export default function classNames(...args:any[]):string {
  let stack = args;
  const classes:string[] = [];

  while (stack.length > 0) {
    const current = stack.shift();
    if (!current) {
      continue;
    }
    if (Array.isArray(current)) {
      stack = [...current, ...stack];
      continue;
    }
    if (typeof current === 'object') {
      Object.entries(current).forEach(([key, value])=>{
        if (value) {
          classes.push(key);
        }
      });
      continue;
    }
    classes.push(current);
  }

  return classes.join(' ');
}
