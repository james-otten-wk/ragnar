import { Component } from '@angular/core';
import { Task, TaskFilterType } from 'app/components/tasks/task';
import { TasksService } from 'app/service/tasks.service';

@Component({
  selector: 'tasks-component',
  templateUrl: 'tasks.component.html'
})
export class TasksComponent {
  constructor(private tasksService: TasksService) {
    this.visibleTasks = this.tasksService.current;
  }

  visibleTasks: Task[];

  applyFilter(event: TaskFilterType) {
    if (TaskFilterType.all === event) {
      this.visibleTasks = this.tasksService.current;
    } else if (TaskFilterType.completed === event) {
      this.visibleTasks = this.tasksService.getCompleted();
    } else if (TaskFilterType.NotStarted === event) {
      this.visibleTasks = this.tasksService.getNotStarted();
    }
  }
}
