function countVowel(string) {
  let count = string.match(/[aeiou]/g).length;
  return count;
}
var string = "school uniform";
console.log(countVowel(string));
