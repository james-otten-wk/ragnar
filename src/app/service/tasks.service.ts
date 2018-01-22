import { Injectable } from '@angular/core';
import { Task } from 'app/components/tasks/task';

@Injectable()
export class TasksService {
  current = [
    new Task('Components'),
    new Task('DI'),
    new Task('Reactive programming'),
    new Task('Flux')
  ];

  getList(): Task[] {
    return this.current;
  }

  getCompleted(): Task[] {
    return this.current.filter(item => item.completed === true);
  }

  getNotStarted(): Task[] {
    return this.current.filter(item => item.completed === false);
  }

  addTask(newTask: Task) {
    this.current.push(newTask);
  }
}
