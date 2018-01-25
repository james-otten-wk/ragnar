import { TaskStore } from 'app/store/task/task-store';

export class Store {
  readonly taskStore: TaskStore = new TaskStore();
}