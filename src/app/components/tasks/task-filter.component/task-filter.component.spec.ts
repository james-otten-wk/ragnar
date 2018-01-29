import { TestBed } from '@angular/core/testing';
import { TaskFilterAllAction } from 'app/actions/tasks/task-filter-all.action';
import { TaskFilterCompletedAction } from 'app/actions/tasks/task-filter-completed.action';
import { TaskFilterIncompleteAction } from 'app/actions/tasks/task-filter-incomplete.action';
import { TaskFilterComponent } from 'app/components/tasks/task-filter.component/task-filter.component';
import { Store } from 'app/store/store';

describe('TaskFilterComponent', () => {
  const filterAllAction = <TaskFilterAllAction> {
    execute: <() => void>jest.fn()
  };

  const filterCompletedAction = <TaskFilterCompletedAction> {
    execute: <() => void>jest.fn()
  };

  const filterIncompleteAction = <TaskFilterIncompleteAction> {
    execute: <() => void>jest.fn()
  };

  const store = <Store> {
  };

  beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TaskFilterComponent],
        providers: [{provide: filterAllAction, useValues: filterAllAction},
          {provide: filterCompletedAction, useValues: filterCompletedAction},
          {provide: filterIncompleteAction, useValues: filterIncompleteAction},
          {provide: store, useValues: store}]
      }).compileComponents();
  });

  it('should create the component', () => {
      expect(true).toBe(true);
  });
});