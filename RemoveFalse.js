function bouncer(arr) {
    let newArr = [];
    arr.map(item => {
        return (item) ? newArr.push(item): '';
    });
    return newArr;
}
console.log(bouncer([7, "ate", "", false, 9]));