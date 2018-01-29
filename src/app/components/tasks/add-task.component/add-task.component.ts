import { Component } from '@angular/core';
import { TaskAddAction } from 'app/actions/tasks/task-add.action';
import { Task } from 'app/components/tasks/task';

@Component({
  selector: 'add-task-component',
  templateUrl: 'add-task.component.html',
  styleUrls: ['add-task.component.scss']
})
export class AddTaskComponent {
  constructor(readonly taskAddAction: TaskAddAction) {
  }

  addItem(newItemText: string) {
    this.taskAddAction.execute(new Task(newItemText));
  }
}