import { Injectable } from '@angular/core';
import { Task, TaskFilterType } from 'app/components/tasks/task';
import { Store } from 'app/store/store';

@Injectable()
export class TasksService {
  constructor(readonly store: Store) {
  }

  applyFilterUpdateSummary() {
    var visible: Task[] = [];
    var filterType = this.store.taskStore.filter.value;

    if (filterType === TaskFilterType.all) {
      visible = this.store.taskStore.allTasks.value;
    } else if (filterType === TaskFilterType.completed) {
      visible = this.getCompletedTasks(this.store.taskStore.allTasks.value);
    } else if (filterType === TaskFilterType.NotStarted) {
      visible = this.getNotStartedTasks(this.store.taskStore.allTasks.value);
    }

    this.store.taskStore.visibleTasks.next(visible);

    //Update summary
    this.store.taskStore.completedTaskCount.next(this.getCompletedTasks(visible).length);
    this.store.taskStore.notStartedTaskCount.next(this.getNotStartedTasks(visible).length);
    this.store.taskStore.totalCount.next(visible.length);
    this.store.taskStore.averageLength.next(this.getAverageLength(visible));
    this.store.taskStore.lastAlphabetical.next(this.getLastAlphabetical(visible));
  }

  getCompletedTasks(tasks: Task[]): Task[] {
    return tasks.filter(item => item.completed === true);
  }

  getNotStartedTasks(tasks: Task[]): Task[] {
    return tasks.filter(item => item.completed === false);
  }

  getAverageLength(tasks: Task[]): number {
    if (tasks.length > 0) {
      var length = tasks.reduce((acc: number, x: Task) => {
        return acc + x.name.length;
      }, 0);
      return length / tasks.length;
    } else {
      return 0;
    }
  }

  getLastAlphabetical(task: Task[]): string {
    if (task.length > 0) {
      return task.sort((a: Task, b: Task) => {
        if (a.name > b.name) {
          return -1;
        } else if (a.name === b.name) {
          return 0;
        } else {
          return 1;
        }
      })[0].name;
    } else {
      return '';
    }
  }
}
