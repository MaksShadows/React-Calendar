export const generateNumbers = (from, to) => {
  const newList = [];
  for (let i = from; i <= to; i += 1) {
    newList.push(i);
  }
  return newList;
};