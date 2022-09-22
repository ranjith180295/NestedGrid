import { Component, EventEmitter, Input, Output } from '@angular/core'; // First, import Input

@Component({
  selector: 'AddItem',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddItemComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  @Input() Newtest = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
