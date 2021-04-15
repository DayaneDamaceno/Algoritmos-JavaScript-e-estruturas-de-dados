function confirmEnding(str, target) {
    const result = new RegExp(`${target}$`);
    return result.test(str)
}
  
console.log(confirmEnding("Bastian", "n"));
