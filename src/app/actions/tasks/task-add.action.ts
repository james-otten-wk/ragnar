import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/IDataAction';
import { Task } from 'app/components/tasks/task';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

@Injectable()
export class TaskAddAction implements IDataAction<Task> {
  constructor(private store: Store, readonly service: TasksService) {
  }

  execute(payload: Task) {
    var currentItems = this.store.taskStore.allTasks.value;
    currentItems.push(payload);
    this.store.taskStore.allTasks.next(currentItems);
    this.service.applyFilterUpdateSummary();
  }
}