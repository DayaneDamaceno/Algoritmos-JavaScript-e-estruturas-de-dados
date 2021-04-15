/*
    Retorne o comprimento da palavra mais longa na frase fornecida.
    Sua resposta deve ser um número.
*/
function findLongestWordLength(str) {
    let words = str.split(' ');
    let longestWordLength = 0;
    for (const word of words) 
        longestWordLength = word.length > longestWordLength ? word.length : longestWordLength;
    return longestWordLength;
}
//ou
// function findLongestWordLength(s) {
//     return s.split(' ').reduce(function(longest, word) {
//         return Math.max(longest, word.length)
//     }, 0);
// }
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");