import { Component } from '@angular/core';
import { Task } from 'app/components/tasks/task';
import { Store } from 'app/store/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'tasks-list-component',
  templateUrl: 'tasks-list.component.html'
})
export class TasksListComponent {
  tasks$: Observable<Task[]>;

  constructor(readonly store: Store) {
    this.tasks$ = store.taskStore.visibleTasks;
  }
}