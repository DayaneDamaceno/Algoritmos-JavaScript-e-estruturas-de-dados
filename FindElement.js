// function findElement(arr, func) {
//     arr.forEach(element => {
//         return console.log(func(element) ? element : undefined);
//     });
// }
  
// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

//ou
function findElement(arr, func) {
    return arr.find(func);
}
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

