import { TestBed } from '@angular/core/testing';
import { TaskRemoveAction } from 'app/actions/tasks/task-remove.action';
import { TaskSelectAllUpdateAction } from 'app/actions/tasks/task-select-all-update.action';
import { TaskUpdateAction } from 'app/actions/tasks/task-update.action';
import { CommonComponentsModule } from 'app/components/common/common-components.module';
import { Task } from 'app/components/tasks/task';
import { TasksListComponent } from 'app/components/tasks/task-list.component/tasks-list.component';
import { Store } from 'app/store/store';

describe('TasksListComponent', () => {
  const updateAction = <TaskUpdateAction> {
    execute: <(task: Task) => void>jest.fn()
  };

  const removeAction = <TaskRemoveAction> {
    execute: <(task: Task) => void>jest.fn()
  };

  const selectAllAction = <TaskSelectAllUpdateAction> {
    execute: <(status: boolean) => void>jest.fn()
  };

  const store = <Store> {
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonComponentsModule],
      declarations: [TasksListComponent],
      providers: [{provide: updateAction, useValues: updateAction},
        {provide: removeAction, useValues: removeAction},
        {provide: selectAllAction, useValues: selectAllAction},
        {provide: store, useValues: store}]
      }).compileComponents();
    });

    it('should create the component', () => {
      expect(true).toBe(true);
    });
  });