import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/IAction';
import { TaskFilterType } from 'app/components/tasks/task';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

@Injectable()
export class TaskFilterCompletedAction implements IAction {
  constructor(private store: Store, readonly service: TasksService) {
  }

  execute() {
    this.store.taskStore.filter.next(TaskFilterType.completed);
    this.service.applyFilterUpdateSummary();
  }
}