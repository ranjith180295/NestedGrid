import { Component, Input } from '@angular/core'; // First, import Input

@Component({
  selector: 'ItemDetail',
  templateUrl: './ItemDetail.component.html',
})
export class ItemDetailComponent {
  @Input() ItemDetails = ''; // decorate the property with @Input()
}
