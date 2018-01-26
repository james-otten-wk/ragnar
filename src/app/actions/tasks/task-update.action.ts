import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/IDataAction';
import { IListItem } from 'app/components/common/list-item/IListItem';
import { Task } from 'app/components/tasks/task';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

@Injectable()
export class TaskUpdateAction implements IDataAction<Task> {
  constructor(private store: Store, readonly service: TasksService) {
  }

  execute(payload: IListItem) {
    var currentItems = this.store.taskStore.allTasks.value;
    var updateIndex = currentItems.findIndex(x => x.id === payload.id);
    currentItems.splice(updateIndex, 1, payload);
    
    this.store.taskStore.allTasks.next(currentItems);
    this.service.applyFilterUpdateSummary();
  }
}