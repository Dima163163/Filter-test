const filter = (arr, key, val) => {
  console.log('val', val);

  const filterArr = arr.filter(value => {
    if (Object.keys(value).includes(key) && Object.values(value).includes(val)) {
      return value
    }
  });
  return filterArr
};
export default filter;