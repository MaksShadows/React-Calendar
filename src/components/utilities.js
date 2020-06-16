const generateNumbers = (from, to) => {
  const newList = [];
  for (let i = from; i <= to; i++) {
    newList.push(i);
  }
  return newList;
};

export default generateNumbers;

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export function getMonday() {
  let cur = new Date();
  let day = cur.getDay(),
      diff = cur.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday

  let monday = new Date(cur.setDate(diff));
  setItem('monday', monday);
  return monday;
}
