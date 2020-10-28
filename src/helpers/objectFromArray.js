function objectFromArray(keys, defaultValue = null) {
  return keys.reduce((obj, el) => {
    obj[el] = defaultValue;
    return obj;
  }, {});
}

export default objectFromArray;
