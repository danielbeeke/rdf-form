/**
 * May be used for filtering array's.
 * @param value 
 * @param index 
 * @param self 
 */
 export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index && value;
}