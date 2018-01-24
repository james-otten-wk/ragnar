import { Component } from '@angular/core';
import { TaskFilterType } from 'app/components/tasks/task';
import { TasksService } from 'app/service/tasks.service';

@Component({
  selector: 'task-filter-component',
  templateUrl: 'task-filter.component.html',
})
export class TaskFilterComponent {
  constructor(readonly tasksService: TasksService) {
  }

  clickShowAll() {
    this.tasksService.setFilter(TaskFilterType.all);
  }

  clickCompleted() {
    this.tasksService.setFilter(TaskFilterType.completed);
  }

  clickNotStarted() {
    this.tasksService.setFilter(TaskFilterType.NotStarted);    
  }
}