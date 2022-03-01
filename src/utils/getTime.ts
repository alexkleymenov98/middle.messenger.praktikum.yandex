export const getTime = (time:string):string=> {
  const date = Date.parse(time);

  return Intl.DateTimeFormat('ru', {hour: 'numeric', minute: 'numeric'}).format(date);
};
