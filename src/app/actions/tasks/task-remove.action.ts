import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/IDataAction';
import { IListItem } from 'app/components/common/list-item/IListItem';
import { Task } from 'app/models/task';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

@Injectable()
export class TaskRemoveAction implements IDataAction<Task> {
  constructor(private store: Store, readonly service: TasksService) {
  }

  execute(payload: IListItem) {
    var currentItems = this.store.taskStore.allTasks.value;
    var removeIndex = currentItems.findIndex(x => x.id === payload.id);
    currentItems.splice(removeIndex, 1);

    this.store.taskStore.allTasks.next(currentItems);
    this.service.applyFilterUpdateSummary();
  }
}