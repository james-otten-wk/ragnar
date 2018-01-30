import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/IAction';
import { TaskFilterType } from 'app/models/task';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

@Injectable()
export class TaskFilterAllAction implements IAction {
  constructor(private store: Store, private service: TasksService) {
  }

  execute() {
    this.store.taskStore.filter.next(TaskFilterType.all);
    this.service.applyFilterUpdateSummary();
  }
}