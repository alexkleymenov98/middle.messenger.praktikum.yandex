export const getTime = (time:string):string=> {
  const date = Date.parse(time);

  // eslint-disable-next-line new-cap
  return Intl.DateTimeFormat('ru', {hour: 'numeric', minute: 'numeric'}).format(date);
};
