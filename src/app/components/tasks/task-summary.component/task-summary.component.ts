import { Component } from '@angular/core';
import { Store } from 'app/store/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'task-summary-component',
  templateUrl: 'task-summary.component.html',
  styleUrls: ['task-summary.component.scss']
})
export class TaskSummaryComponent {
  constructor(readonly store: Store) {
    this.totalCount = this.store.taskStore.totalCount;
    this.averageLength = this.store.taskStore.averageLength;
    this.completedCount = this.store.taskStore.completedTaskCount;
    this.incompleteCount = this.store.taskStore.notStartedTaskCount;
    this.lastAlphabetical = this.store.taskStore.lastAlphabetical;
  }

  totalCount: Observable<number>;
  averageLength: Observable<number>;
  completedCount: Observable<number>;
  incompleteCount: Observable<number>;
  lastAlphabetical: Observable<string>;
}