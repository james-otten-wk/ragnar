import { Component, Input } from '@angular/core';
import { Task } from 'app/components/tasks/task';

@Component({
  selector: 'tasks-data-component',
  templateUrl: 'tasks-data.component.html'
})
export class TasksDataComponent {
  @Input() myTask: Task;

  constructor() {}
}