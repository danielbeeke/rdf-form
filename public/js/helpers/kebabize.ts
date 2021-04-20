export const kebabize = str => {
  if (str.split('').every(letter => letter.toUpperCase() === letter)) return str.toLowerCase()
  return str.split('').map((letter, index) => {
    return letter.toUpperCase() === letter
     ? `${index !== 0 ? '-' : ''}${letter.toLowerCase()}`
     : letter;
  }).join('');
}
