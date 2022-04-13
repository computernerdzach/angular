import { Component } from "@angular/core";
import { BookRepository } from "./repository.model";
import { Book } from "./book.model";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { ImageValidator } from "./image.validator";
import { map } from "rxjs/operators";


@Component({

    selector: "app-book",
    templateUrl: "book.component.html",
    styleUrls: ["book.component.css"]

})

// Reactive Form
export class BookComponent {
    bookForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        writer: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        image: new FormControl('', [Validators.required, ImageValidator.isValidExtension])
    })

    get name() {
        return this.bookForm.get('name');
    }

    get image() {
        return this.bookForm.get('image');
    }

    onSubmit() {
        console.log(this.bookForm.value);
    }

    updateBook() {
        this.bookForm.patchValue({
            name: 'Childhood',
            writer: 'yo momma',
            price: 666
        })
    }

    // name = new FormControl('Title');
    // writer = new FormControl('Author');
    // price = new FormControl('42');

    // updateName() {
    //     this.name.setValue('My Childhood');
    // }
}






// export class BookComponent {

//     model: BookRepository = new BookRepository();

//     newBook: Book = new Book();
//     get jsonBook() {
//         return JSON.stringify(this.newBook)
//     }

//     addBook(b: Book) {
//         console.log('New Book is ' + this.jsonBook);
//     }

//     getFormValidationErrors(form: NgForm): string[] {
//         let messages: string[] = [];
//         Object.keys(form.controls).forEach(x=>{
//             console.log(x);
//             console.log(form.controls[x]);

//         this.getValidationErrors(form.controls[x],x)
//         .forEach(message=> messages.push(message));
//         })

//         return messages;
//     }

//     getValidationErrors(model: any, key: string) {
//         let ctrlName: string = model.name || key;;
//         let messages: string[] = [];

//         if (model.errors) {
//             for (let errorName in model.errors) {
//                 switch (errorName) {
//                     case "required":
//                         messages.push(`You must enter a ${ctrlName}`);
//                         break;
//                     case "minlength":
//                         messages.push('You must enter min. 3 characters');
//                         break;
//                 }
//             }
//         }
//         return messages;
//     }

//     log(model: any) {
//         console.log(model);
//     }

//     formSubmit: boolean = false;

//     submitForm(form: NgForm) {
//         console.log(form);
//         this.formSubmit = true;
//         if (form.valid) {
//             this.addBook(this.newBook);
//             this.newBook = new Book();
//             form.reset();
//             this.formSubmit = false;
//         }
//     }




//     // bookName = this.model.getBookId(1).name;

//     // addBook(){
//     //     this.model.addBook(new Book(4, 'Anna Karanina', 'Tolstoy', 20))
//     // }

//     // deleteBook(book:Book) {
//     //     this.model.deleteBook(book)
//     // }

//     // updateBook(book:Book){
//     //     book.name="updated"    
//     // }

// }

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