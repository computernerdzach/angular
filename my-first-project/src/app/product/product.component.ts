import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  template: '<p>Product </p>',
  styles: ['p{color: blue}']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
