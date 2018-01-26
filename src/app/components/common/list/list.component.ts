import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IListItem } from '../list-item/IListItem';

@Component({
  selector: 'list-component',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class ListComponent {
  @Input() listItems$: Observable<IListItem[]>;
  @Output() onCheckboxChange: EventEmitter<IListItem> = new EventEmitter<IListItem>();
  @Output() onRemoveItem: EventEmitter<IListItem> = new EventEmitter<IListItem>();

  updateCheckbox(payload: IListItem) {
    this.onCheckboxChange.emit(payload);
  }

  removeItem(payload: IListItem) {
    this.onRemoveItem.emit(payload);
  }
}