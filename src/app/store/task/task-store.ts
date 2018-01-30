import { Task, TaskFilterType } from 'app/models/task';
import { BehaviorSubject } from 'rxjs';

export class TaskStore {
  readonly allTasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  readonly visibleTasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  readonly filter: BehaviorSubject<TaskFilterType> = new BehaviorSubject<TaskFilterType>(TaskFilterType.all);

  readonly completedTaskCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  readonly notStartedTaskCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  readonly totalCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  readonly averageLength: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  readonly lastAlphabetical: BehaviorSubject<string> = new BehaviorSubject<string>('');
}