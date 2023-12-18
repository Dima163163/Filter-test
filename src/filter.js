const filter = (arr, key, val) => {
  const filterArr = arr.filter(value => Object.keys(value).includes(key) && Object.values(value).includes(val));
  return filterArr
};

export default filter;