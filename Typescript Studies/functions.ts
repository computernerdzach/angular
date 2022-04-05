function getSum(x, y, z) {
    return x + y + z;
}

getSum('a', 7, true);

function sum(x: number, y: number, z: number) {
    return x + y + z;
}

// sum(3,5,'a');

function anotherSum(
    x: number, y: number, z: number
): number {
    return x + y + z;
}

function sum2(x: number, y: number, z?: number): number {
    // return x+y+z;
    var count = 2;
    if (typeof z !== 'undefined') {
        return x + y + z;
        count++;
    }
}

console.log(sum2(3, 4, 5));

function getSum5(x: number, y: number, z: number = 5): number {
    return x + y + z;
}

getSum5(3, 4, 2);
getSum5(7, 7);


function getAverage(...x: number[]): number {
    let total = 0;
    let count = 0;

    for (let i = 0; i <= x.length; i++) {
        total = x[i];
        count++;
    }
    const result = total / count;
    return result;
}

getAverage(2,3,6,24,3,66,735,5,0,-99,2)
