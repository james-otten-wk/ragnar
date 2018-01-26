import { Component } from '@angular/core';
import { TaskFilterAllAction } from 'app/actions/tasks/task-filter-all.action';
import { TaskFilterCompletedAction } from 'app/actions/tasks/task-filter-completed.action';
import { TaskFilterIncompleteAction } from 'app/actions/tasks/task-filter-incomplete.action';
import { TaskFilterType } from 'app/components/tasks/task';
import { Store } from 'app/store/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'task-filter-component',
  templateUrl: 'task-filter.component.html',
  styleUrls: ['task-filter.component.scss']
})
export class TaskFilterComponent {
  constructor(readonly store: Store,
    readonly taskFilterAllAction: TaskFilterAllAction,
    readonly taskFilterCompleted: TaskFilterCompletedAction,
    readonly taskFilterIncompleteAction: TaskFilterIncompleteAction) {
      this.remainingTasks = store.taskStore.notStartedTaskCount;
  }

  remainingTasks: Observable<number>;

  showAllSelected(): boolean {
    return this.store.taskStore.filter.value === TaskFilterType.all;
  }

  completedSelected(): boolean {
    return this.store.taskStore.filter.value === TaskFilterType.completed;
  }

  notStartedSelected(): boolean {
    return this.store.taskStore.filter.value === TaskFilterType.NotStarted;
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