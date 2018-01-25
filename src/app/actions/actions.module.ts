import { NgModule } from '@angular/core';
import { TaskAddAction } from 'app/actions/tasks/task-add.action';
import { TaskFilterAllAction } from 'app/actions/tasks/task-filter-all.action';
import { TaskFilterCompletedAction } from 'app/actions/tasks/task-filter-completed.action';
import { TaskFilterIncompleteAction } from 'app/actions/tasks/task-filter-incomplete.action';

@NgModule({
  providers: [TaskFilterAllAction, TaskFilterCompletedAction, TaskFilterIncompleteAction, TaskAddAction]
})
export class ActionsModule {}