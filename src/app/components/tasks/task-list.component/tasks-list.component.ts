import { Component, Input } from '@angular/core';
import { Task } from 'app/components/tasks/task';

@Component({
  selector: 'tasks-list-component',
  templateUrl: 'tasks-list.component.html'
})
export class TasksListComponent {
  @Input() visibleTasks: Task[];
}