import { Component } from '@angular/core';
import { TaskAddAction } from 'app/actions/tasks/task-add.action';
import { Task } from 'app/components/tasks/task';
import { Store } from 'app/store/store';

@Component({
  selector: 'add-task-component',
  templateUrl: 'add-task.component.html',
  styleUrls: ['add-task.component.scss']
})
export class AddTaskComponent {
  newItemText: string;

  constructor(readonly store: Store,
    readonly taskAddAction: TaskAddAction) {
  }

  click() {
    this.taskAddAction.execute(new Task(this.newItemText));
    this.newItemText = '';
  }
}