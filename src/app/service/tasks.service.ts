import { Injectable } from '@angular/core';
import { Task } from 'app/components/tasks/task';
import { TaskFilterType } from 'app/components/tasks/task';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TasksService {
  current = [
    new Task('Components'),
    new Task('DI'),
    new Task('Reactive programming'),
    new Task('Flux')
  ];

  public readonly tasks$: BehaviorSubject<Task[]> = new BehaviorSubject(this.current);
  private filter: TaskFilterType = TaskFilterType.all;

  addTask(newTask: Task) {
    this.current.push(newTask);
    this.applyFilter();
  }

  setFilter(newFilter: TaskFilterType) {
    this.filter = newFilter;
    this.applyFilter();
  }

  applyFilter() {
    if (this.filter === TaskFilterType.all) {
      this.tasks$.next(this.current);
    } else if (this.filter === TaskFilterType.completed) {
      this.tasks$.next(this.current.filter(item => item.completed === true));
    } else if (this.filter === TaskFilterType.NotStarted) {
      this.tasks$.next(this.current.filter(item => item.completed === false));
    }
  }
}
