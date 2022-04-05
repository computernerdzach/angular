
class Car{

    brand: string;
    model: string;
    color: string;
    yearManu: number;

    constructor(brand:string, model:string, color:string, yearManu:number){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.yearManu = yearManu;
    }

    year() {
        console.log(this.yearManu);
    }

}

let car = new Car('mazda','rsx','yellow',2019);
console.log(car.color + ' ' + car.brand);

let car2 = new Car('ford','f150','brown',1981);
console.log(car2.yearManu, car2.model);