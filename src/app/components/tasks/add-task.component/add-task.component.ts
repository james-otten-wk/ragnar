import { Component, Input } from '@angular/core';
import { Task } from 'app/components/tasks/task';
import { TasksService } from 'app/service/tasks.service';

@Component({
  selector: 'add-task-component',
  templateUrl: 'add-task.component.html',
})
export class AddTaskComponent {
  @Input() newItemText: string;

  constructor(private tasksService: TasksService) {}

  click() {
    this.tasksService.addTask(new Task(this.newItemText));
    this.newItemText = '';
  }
}