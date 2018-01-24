import { Component } from '@angular/core';
import { Task } from 'app/components/tasks/task';
import { TasksService } from 'app/service/tasks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'tasks-list-component',
  templateUrl: 'tasks-list.component.html'
})
export class TasksListComponent {
  tasks$: Observable<Task[]>;

  constructor(readonly tasksService: TasksService) {
    this.tasks$ = tasksService.tasks$;
  }
}