function getSum(x, y, z) {
    return x + y + z;
}
getSum('a', 7, true);
function sum(x, y, z) {
    return x + y + z;
}
// sum(3,5,'a');
function anotherSum(x, y, z) {
    return x + y + z;
}
function sum2(x, y, z) {
    // return x+y+z;
    var count = 2;
    if (typeof z !== 'undefined') {
        return x + y + z;
        count++;
    }
}
console.log(sum2(3, 4, 5));
