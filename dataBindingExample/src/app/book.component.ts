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

    book: Book = this.model.getBookId(1);
}