function debounce(func, timeout) {
  let timerId;
  return function (...args) {
    if (timerId) clearTimeout(timerId);
    const context = this;
    timerId = setTimeout(() => {
      timerId = null;
      func.apply(context, args);
    }, timeout);
  };
}

export default debounce;
