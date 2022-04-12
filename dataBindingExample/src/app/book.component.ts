import { Component } from "@angular/core";
import { BookRepository } from "./repository.model";
import { Book } from "./book.model";

@Component({

    selector: "app-book",
    templateUrl: "book.component.html",
    styleUrls: ["book.component.css"]

})

export class BookComponent {

    model: BookRepository = new BookRepository();

    newBook: Book = new Book();
    get jsonBook() {
        return JSON.stringify(this.newBook)
    }

    addBook(b: Book) {
        console.log('New Book is ' + this.jsonBook);
    }

    log(model: any) {
        console.log(model);
    }




    // bookName = this.model.getBookId(1).name;

    // addBook(){
    //     this.model.addBook(new Book(4, 'Anna Karanina', 'Tolstoy', 20))
    // }

    // deleteBook(book:Book) {
    //     this.model.deleteBook(book)
    // }

    // updateBook(book:Book){
    //     book.name="updated"    
    // }

}

// export class BookComponent {

//     name1:string='Angular Pipes';
//     price:number=159.9555;
//     today:number=Date.now();

//     description='Lorem ipsum lots of writing and stuff';


//     model: BookRepository = new BookRepository();
//     book: Book = this.model.getBookId(1);

//     disabled = false;

//     getClassBinding(id: number): string {
//         let book = this.model.getBookId(id);
//         return (book.price! >= 20 ? "bg-primary " : "bg-info") + " m-3";
//     }

//     getClassObject(id: number): Object {
//         let book = this.model.getBookId(id);
//         return {
//             "bg-primary": book.price! >= 20,
//             "bg-info": book.price! < 20,
//             "text-white": book.name == "My Childhood"
//         }
//     }

//     color: string = this.model.getBookId(1).price! >= 20 ? "green" : "yellow";

//     getStyleBinding(id: number): Object {
//         let book = this.model.getBookId(id);
//         return {
//             fontSize: "40px",
//             color: "yellow"
//         }
//     }

//     onClick(event: any) {
//         event.stopPropagation();
//         console.log('Button was clicked');
//         console.log(event);
//     }

//     onClickDiv() {
//         console.log('div was clicked');
//     }


//     theName = "John"
//     onKeyUp() {
//         console.log(this.theName);
//     }

// }