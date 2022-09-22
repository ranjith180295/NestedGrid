import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from './product';
import { ProductService } from './productservice';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'DrillDownTable',
  templateUrl: './DrilldownTable.component.html',
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
export class DrilldownTable {
  ParentDetails: Product[];

  ParentHeaders = [];
  ParentColumns = [];
  ParentValue;
  SubParentValue;
  ChildValue;
  SubParentHeaders = [];
  SubParentColumns = [];

  @Input() newItems = new EventEmitter<string>();
  //  @Output() newItemOutput = new EventEmitter<string>();

  @Input() tabledata: Observable<any>;
  @Input() GetParentHeaders: Observable<any>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.ParentHeaders = [
    //   { header: ' ' },
    //   { header: 'Client Name' },
    //   { header: 'Folio' },
    //   { header: 'Purchased Value' },
    //   { header: 'Current Value' },
    //   { header: 'Gain Loss' },
    //   { header: 'Gain Loss %' },
    //   { header: 'Portfolio %' },
    //   { header: ' ' },
    // ];
    // this.SubParentHeaders = [
    //   { header: 'PARTICULARS' },
    //   { header: 'FOLIO NO.' },
    //   { header: 'QTY / UNITS' },
    //   { header: 'VALUE / RATE' },
    //   { header: 'MKT.VALUE / MKT.RATE' },
    //   { header: 'PORTFOLIO %' },
    //   { header: 'ACTIONS' },
    // ];
    // this.productService
    //   .getProductsWithOrdersSmall()
    //   .then((data) => (this.ParentDetails = data));
    this.tabledata.subscribe((data) => {
      alert('Testing');

      this.ParentDetails = data;
    });

    this.GetParentHeaders.subscribe((data) => {
      alert('Testingsdd');

      //this.ParentHeaders = data;
    });
  }
}
