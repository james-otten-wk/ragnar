import { NgModule } from '@angular/core';
import { TaskAddAction } from 'app/actions/tasks/task-add.action';
import { TaskFilterAllAction } from 'app/actions/tasks/task-filter-all.action';
import { TaskFilterCompletedAction } from 'app/actions/tasks/task-filter-completed.action';
import { TaskFilterIncompleteAction } from 'app/actions/tasks/task-filter-incomplete.action';
import { TaskRemoveAction } from 'app/actions/tasks/task-remove.action';
import { TaskSelectAllUpdateAction } from 'app/actions/tasks/task-select-all-update.action';
import { TaskUpdateAction } from 'app/actions/tasks/task-update.action';

@NgModule({
  providers: [TaskFilterAllAction, TaskFilterCompletedAction, TaskFilterIncompleteAction, TaskAddAction, TaskUpdateAction, TaskRemoveAction, TaskSelectAllUpdateAction]
})
export class ActionsModule {}