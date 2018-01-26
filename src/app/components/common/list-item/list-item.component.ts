import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListItem } from './IListItem';

@Component({
  selector: 'list-item-component',
  templateUrl: 'list-item.component.html'
})
export class ListItemComponent {
  @Input() item: IListItem;
  @Output() onCheckboxChange: EventEmitter<IListItem> = new EventEmitter<IListItem>();
  @Output() onRemoveItem: EventEmitter<IListItem> = new EventEmitter<IListItem>();

  updateCheckbox() {
    this.item.completed = !this.item.completed;
    this.onCheckboxChange.emit(this.item);
  }

  removeItem() {
    this.onRemoveItem.emit(this.item);
  }
}