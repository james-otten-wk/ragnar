import { Component } from '@angular/core';
import { TaskFilterAllAction } from 'app/actions/tasks/task-filter-all.action';
import { TaskFilterCompletedAction } from 'app/actions/tasks/task-filter-completed.action';
import { TaskFilterIncompleteAction } from 'app/actions/tasks/task-filter-incomplete.action';

@Component({
  selector: 'task-filter-component',
  templateUrl: 'task-filter.component.html',
  styleUrls: ['task-filter.component.scss']
})
export class TaskFilterComponent {
  constructor(readonly taskFilterAllAction: TaskFilterAllAction,
    readonly taskFilterCompleted: TaskFilterCompletedAction,
    readonly taskFilterIncompleteAction: TaskFilterIncompleteAction) {
  }

  clickShowAll() {
    this.taskFilterAllAction.execute();
  }

  clickCompleted() {
    this.taskFilterCompleted.execute();
  }

  clickNotStarted() {
    this.taskFilterIncompleteAction.execute();
  }
}