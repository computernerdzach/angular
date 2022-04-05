let x: string;
x = "Hello";
console.log(x);
let y:15;
console.log(y);
let isCorrect: boolean;
isCorrect = true;
console.log(isCorrect);
let countries:string[]=['Russia', 'Germany', 'Portugal'];
let numbers:Array<number>=[1,2,3];
let t:[number,string]=[1,'hi'];
console.log(countries, numbers, t);

let a:any;
a = 5;
a = 'hi';
a = true;
console.log(a);

enum colors {red=0, blue=1, yellow=2, green=3};
let red = colors.red;
let blue = colors.blue;
let yellow = colors.yellow;
let green = colors.green;

console.log(colors);
