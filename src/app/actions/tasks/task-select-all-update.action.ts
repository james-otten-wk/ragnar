import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/IDataAction';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

@Injectable()
export class TaskSelectAllUpdateAction implements IDataAction<boolean> {
  constructor(private store: Store, readonly service: TasksService) {}

  execute(payload: boolean) {
    var currentItems = this.store.taskStore.allTasks.value;
    for (let item of currentItems) {
      if (item.completed !== payload) {
        item.completed = payload;
      }
    }
    
    this.store.taskStore.allTasks.next(currentItems);
    this.service.applyFilterUpdateSummary();
  }
}