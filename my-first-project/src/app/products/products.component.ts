import { Component } from "@angular/core";


@Component({

    selector: 'products',
    templateUrl: './products.component.html'

})
export class ProductsComponent {
    addProduct=true;

    constructor(){
        setTimeout(()=>{
            this.addProduct=false
        },4000)
    }

}