import { Component } from "@angular/core";
import { BookRepository } from "./repository.model";
import { Book } from "./book.model";

@Component({

    selector: "app-book",
    templateUrl: "book.component.html",
    styleUrls: ["book.component.css"]

})

export class BookComponent {

    name1:string='Angular Pipes';
    price:number=159.9555;
    today:number=Date.now();


    model: BookRepository = new BookRepository();
    book: Book = this.model.getBookId(1);

    disabled = false;

    getClassBinding(id: number): string {
        let book = this.model.getBookId(id);
        return (book.price! >= 20 ? "bg-primary " : "bg-info") + " m-3";
    }

    getClassObject(id: number): Object {
        let book = this.model.getBookId(id);
        return {
            "bg-primary": book.price! >= 20,
            "bg-info": book.price! < 20,
            "text-white": book.name == "My Childhood"
        }
    }

    color: string = this.model.getBookId(1).price! >= 20 ? "green" : "yellow";

    getStyleBinding(id: number): Object {
        let book = this.model.getBookId(id);
        return {
            fontSize: "40px",
            color: "yellow"
        }
    }

    onClick(event: any) {
        event.stopPropagation();
        console.log('Button was clicked');
        console.log(event);
    }

    onClickDiv() {
        console.log('div was clicked');
    }


    theName = "John"
    onKeyUp() {
        console.log(this.theName);
    }

}