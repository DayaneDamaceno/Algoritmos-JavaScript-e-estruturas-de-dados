function factorial(num) {
    let resultFatorial = 1;
    for (let i = num; i > 0; i--) 
        resultFatorial *= i;
    
    return resultFatorial;
}
  
console.log(factorial(5));