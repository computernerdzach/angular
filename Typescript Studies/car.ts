
export class Car {

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


