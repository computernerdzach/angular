import { Component } from "@angular/core";


@Component({

    selector: 'products',
    templateUrl: './products.component.html'

})
export class ProductsComponent {
    addProduct = true;
    addProductStatus = 'No product added';
    greet = 'howdy ';
    enteredValue = 'Product 1';

    constructor() {
        setTimeout(() => {
            this.addProduct = false
        }, 4000)
    }

    onClick() {
        this.addProductStatus = 'Product added and entered value is: '
        + this.enteredValue ;
        console.log(this.greet);
    }

    onUpdateProductName(event: any) {
        console.log(event);
        this.enteredValue = (<HTMLInputElement>event.target).value;
    }

}