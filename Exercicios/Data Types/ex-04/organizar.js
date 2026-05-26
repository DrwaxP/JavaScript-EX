/*let arr = [3 ,2 ,9 ,7 ,1 ,5 ,-2];

function org() {
    arr.sort((a, b) => b - a);
    return
}
org();

console.log(arr);
*/

let data = ['HTML', 'JavaScript', 'CSS'];

function copia() {
    let copycat = [...data].sort((a, b) => a.localeCompare(b));
    console.log(copycat);
}


copia();
console.log(data);