export const convertDate = (date) => {
  let result = date.split('.')
  result = [result[1], result[0], result[2]].join(' ');
  result = new Date(result).getTime();
  return result

}