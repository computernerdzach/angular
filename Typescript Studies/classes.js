// var __extends = (this && this.__extends) || (function () {
//     var extendStatics = function (d, b) {
//         extendStatics = Object.setPrototypeOf ||
//             ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//             function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
//         return extendStatics(d, b);
//     };
//     return function (d, b) {
//         if (typeof b !== "function" && b !== null)
//             throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
//         extendStatics(d, b);
//         function __() { this.constructor = d; }
//         d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//     };
// })();
// var Car = /** @class */ (function () {
//     function Car(brand, model, color, yearManu) {
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//         this.yearManu = yearManu;
//     }
//     Car.prototype.year = function () {
//         console.log(this.yearManu);
//         console.log(this.brand);
//     };
//     return Car;
// }());
// // let car = new Car('mazda','rsx','yellow',2019);
// // console.log(car.color + ' ' + car.brand);
// // let car2 = new Car('ford','f150','brown',1981);
// // console.log(car2.yearManu, car2.model);
// var Person = /** @class */ (function () {
//     function Person() {
//     }
//     Object.defineProperty(Person.prototype, "mail", {
//         get: function () {
//             return this.email;
//         },
//         set: function (email) {
//             this.email = email;
//         },
//         enumerable: false,
//         configurable: true
//     });
//     Person.prototype.save = function () {
//         console.log('Registration Successful');
//     };
//     return Person;
// }());
// var Customer = /** @class */ (function (_super) {
//     __extends(Customer, _super);
//     function Customer() {
//         return _super !== null && _super.apply(this, arguments) || this;
//     }
//     Customer.prototype.sale = function () {
//         console.log('x items sold');
//         console.log(this.name);
//         this.name;
//     };
//     return Customer;
// }(Person));
// var Employee = /** @class */ (function (_super) {
//     __extends(Employee, _super);
//     function Employee() {
//         return _super !== null && _super.apply(this, arguments) || this;
//     }
//     Employee.prototype.salary = function () {
//         console.log('salary paid');
//     };
//     return Employee;
// }(Person));
// var person = new Person;
// person.save;
// var customer = new Customer;
// customer.sale;
// customer.mail;
// var employee = new Employee;
// employee.salary;
// employee.save;
