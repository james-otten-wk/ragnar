import { Component, EventEmitter, Output } from '@angular/core';
import { TaskFilterType } from 'app/components/tasks/task';

@Component({
  selector: 'task-filter-component',
  templateUrl: 'task-filter.component.html',
})
export class TaskFilterComponent {
  constructor() {}

  @Output() onFilter = new EventEmitter<TaskFilterType>();

  clickShowAll() {
    this.onFilter.emit(TaskFilterType.all);
  }

  clickCompleted() {
    this.onFilter.emit(TaskFilterType.completed);
  }

  clickNotStarted() {
    this.onFilter.emit(TaskFilterType.NotStarted);
  }
}