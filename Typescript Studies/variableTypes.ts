let x: string;
x = "Hello";

let y:15;

let isCorrect: boolean;
isCorrect = true;

let countries:string[]=['Russia', 'Germany', 'Portugal'];
let numbers:Array<number>=[1,2,3];
let t:[number,string]=[1,'hi'];

let a:any;
a = 5;
a = 'hi';
a = true;

enum colors {red=0, blue=1, yellow=2, green=3};
let red = colors.red;
let blue = colors.blue;
let yellow = colors.yellow;
let green = colors.green;

function greeter():void {
    console.log('hello');
}

let b:number;
b = 5;

class Product {

}

let greet;
greet=['Hello'];
let count = (<string>greet).length;
let count2 = (greet as string).length;

