import { Component } from '@angular/core';
import { TaskRemoveAction } from 'app/actions/tasks/task-remove.action';
import { TaskUpdateAction } from 'app/actions/tasks/task-update.action';
import { IListItem } from 'app/components/common/list-item/IListItem';
import { Task } from 'app/components/tasks/task';
import { Store } from 'app/store/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'tasks-list-component',
  templateUrl: 'tasks-list.component.html'
})
export class TasksListComponent {
  listItems$: Observable<Task[]>;

  constructor(readonly store: Store, readonly updateAction: TaskUpdateAction, readonly removeAction: TaskRemoveAction) {
    this.listItems$ = store.taskStore.visibleTasks;
  }

  updateCheckbox(payload: IListItem) {
    this.updateAction.execute(payload);
  }

  removeItem(payload: IListItem) {
    this.removeAction.execute(payload);
  }
}