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
function getSum5(x, y, z) {
    if (z === void 0) { z = 5; }
    return x + y + z;
}
getSum5(3, 4, 2);
getSum5(7, 7);
function getAverage() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i <= x.length; i++) {
        total = x[i];
        count++;
    }
    var result = total / count;
    return result;
}
getAverage(2, 3, 6, 24, 3, 66, 735, 5, 0, -99, 2);
