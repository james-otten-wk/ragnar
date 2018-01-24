import { Component } from '@angular/core';
import { Task } from 'app/components/tasks/task';
import { TasksService } from 'app/service/tasks.service';

@Component({
  selector: 'task-summary-component',
  templateUrl: 'task-summary.component.html',
})
export class TaskSummaryComponent {
  constructor(readonly tasksService: TasksService) {
    tasksService.tasks$.subscribe((taskList: Array<Task>) => {
        this.totalCount = taskList.length;
    });

    tasksService.tasks$.subscribe((taskList: Array<Task>) => {
      if (taskList.length > 0) {
        var length = taskList.reduce((acc: number, x: Task) => {
          return acc + x.name.length;
        }, 0);
        this.averageLength = length / taskList.length;
      } else {
        this.averageLength = 0;
      }
    });

    tasksService.tasks$.subscribe((taskList: Array<Task>) => {
      this.completedCount = taskList.filter(x => x.completed === true).length;
    });

    tasksService.tasks$.subscribe((taskList: Array<Task>) => {
      this.incompleteCount = taskList.filter(x => x.completed === false).length;
    });

    tasksService.tasks$.subscribe((taskList: Array<Task>) => {
      if (taskList.length > 0) {
        this.lastAlphabetical = taskList.sort((a: Task, b: Task) => {
          if (a.name > b.name) {
            return -1;
          } else if (a.name === b.name) {
            return 0;
          } else {
            return 1;
          }
        })[0].name;
      } else {
        this.lastAlphabetical = '';
      }
    });
  }

  totalCount: number;
  averageLength: number;
  completedCount: number;
  incompleteCount: number;
  lastAlphabetical: string;
}