var Car = /** @class */ (function () {
    function Car(brand, model, color, yearManu) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.yearManu = yearManu;
    }
    Car.prototype.year = function () {
        console.log(this.yearManu);
    };
    return Car;
}());
var car = new Car('mazda', 'rsx', 'yellow', 2019);
console.log(car.color + ' ' + car.brand);
