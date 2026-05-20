let arr = ["HTML", "JavaScript", "CSS"];

function copySort() {
    let copy = arr.slice(0);
    copy.sort((a, b) => a > b ? 1 : -1);
    return copy
}
let sorted = copySort();

console.log(sorted);
console.log(arr);