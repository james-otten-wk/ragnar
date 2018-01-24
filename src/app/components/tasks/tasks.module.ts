import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from 'app/components/tasks/add-task.component/add-task.component';
import { TaskFilterComponent } from 'app/components/tasks/task-filter.component/task-filter.component';
import { TasksDataComponent } from 'app/components/tasks/task-list.component/task-data.component/tasks-data.component';
import { TasksListComponent } from 'app/components/tasks/task-list.component/tasks-list.component';
import { TaskSummaryComponent } from 'app/components/tasks/task-summary.component/task-summary.component';
import { TasksComponent } from './tasks.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  exports: [TasksComponent, TasksDataComponent, AddTaskComponent, TasksListComponent],
  declarations: [TasksComponent, TasksDataComponent, AddTaskComponent, TasksListComponent, TaskFilterComponent, TaskSummaryComponent]
})
export class TasksModule {}
