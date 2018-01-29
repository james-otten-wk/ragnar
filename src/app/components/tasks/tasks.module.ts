import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonComponentsModule } from 'app/components/common/common-components.module';
import { AddTaskComponent } from 'app/components/tasks/add-task.component/add-task.component';
import { TaskFilterComponent } from 'app/components/tasks/task-filter.component/task-filter.component';
import { TasksListComponent } from 'app/components/tasks/task-list.component/tasks-list.component';
import { TaskSummaryComponent } from 'app/components/tasks/task-summary.component/task-summary.component';
import { TasksComponent } from './tasks.component';

@NgModule({
  imports: [ CommonModule, FormsModule, CommonComponentsModule ],
  exports: [TasksComponent, AddTaskComponent, TasksListComponent],
  declarations: [TasksComponent, AddTaskComponent, TasksListComponent, TaskFilterComponent, TaskSummaryComponent]
})
export class TasksModule {}
