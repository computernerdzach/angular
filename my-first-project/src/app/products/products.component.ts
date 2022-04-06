import { Component } from "@angular/core";


@Component({

    selector: 'products',
    templateUrl: './products.component.html'

})
export class ProductsComponent {
    addProduct=true;
    addProductStatus='No product added';
    greet='howdy ';
    enteredValue='';

    constructor(){
        setTimeout(()=>{
            this.addProduct=false
        },4000)
    }

    onClick(){
        this.addProductStatus='Product added';
        console.log(this.greet);
    }

    onUpdateProductName(event:any){
        console.log(event);
        this.enteredValue=(<HTMLInputElement>event.target).value;
    }

}