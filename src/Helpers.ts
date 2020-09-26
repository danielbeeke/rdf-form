export const findInSet = (pred, set) => {
  for (let item of set) if (pred(item)) return item
}

export const filterInSet = (pred, set) => {
  let found = []
  for (let item of set) if (pred(item)) found.push(item)
  return found
}

export function debounce(func, wait, immediate = false) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
