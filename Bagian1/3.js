function palindrome(word) {
  const splitted = word.split('')
  let temp = ''
  for (let index = splitted.length-1; index >= 0; index--) {
    temp += splitted[index];
  }
  return temp == word ? 'Palindrome': 'Bukan Palindrome'
}

console.log(palindrome('palindrome'));
console.log(palindrome('level'));