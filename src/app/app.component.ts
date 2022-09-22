import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './productservice';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('rowExpansionTrigger', [
      state(
        'void',
        style({
          transform: 'translateX(-10%)',
          opacity: 0,
        })
      ),
      state(
        'active',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
  ],
})
export class AppComponent {
  ParentDetails: Product[];

  ParentHeaders = [];
  ParentColumns = [];
  ParentValue;
  SubParentValue;
  ChildValue;
  SubParentHeaders = [];
  SubParentColumns = [];

  constructor(private productService: ProductService) {}
  GetParentHeaders = new BehaviorSubject(null);
  tabledata = new BehaviorSubject(null);

  currentItem = 'Television';
  outputItem;

  items = ['item1', 'item2', 'item3', 'item4'];
  wishlist = ['Drone', 'Computer'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  ngOnInit() {
    this.ParentHeaders = [
      { header: ' ' },
      { header: 'Client Name' },
      { header: 'Folio' },
      { header: 'Purchased Value' },
      { header: 'Current Value' },
      { header: 'Gain Loss' },
      { header: 'Gain Loss %' },
      { header: 'Portfolio %' },
      { header: ' ' },
    ];
    this.GetParentHeaders.next(this.ParentHeaders);
    debugger;
    this.SubParentHeaders = [
      { header: 'PARTICULARS' },
      { header: 'FOLIO NO.' },
      { header: 'QTY / UNITS' },
      { header: 'VALUE / RATE' },
      { header: 'MKT.VALUE / MKT.RATE' },
      { header: 'PORTFOLIO %' },
      { header: 'ACTIONS' },
    ];
    this.productService
      .getProductsWithOrdersSmall()
      .then((data) => (this.ParentDetails = data));
    this.tabledata.next(this.ParentDetails);
  }
}
