
class Car {

    private brand: string;
    model: string;
    color: string;
    yearManu: number;

    constructor(brand: string, model: string, color: string, yearManu: number) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.yearManu = yearManu;
    }

    year() {
        console.log(this.yearManu);
        console.log(this.brand);
    }

}

// let car = new Car('mazda','rsx','yellow',2019);
// console.log(car.color + ' ' + car.brand);

// let car2 = new Car('ford','f150','brown',1981);
// console.log(car2.yearManu, car2.model);


class Person {

    protected name: string;

    private email: string;

    get mail():string {
        return this.email;
    }
    set mail(email: string) {
        this.email = email;
    }

    save() {
        console.log('Registration Successful')

    }
}

class Customer extends Person {
    sale() {
        console.log('x items sold')
        console.log(this.name);
        this.name;
    }
}

class Employee extends Person {
    salary() {
        console.log('salary paid')
    }

}

let person = new Person;
person.save;

let customer = new Customer;
customer.sale;
customer.mail;

let employee = new Employee;
employee.salary;
employee.save;

