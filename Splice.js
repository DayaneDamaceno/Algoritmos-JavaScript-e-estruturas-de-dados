function frankenSplice(arr1, arr2, n) {
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
  }
  frankenSplice([1, 2, 3], [4, 5], 1);
  //retorna -> [4, 1, 2, 3, 5]