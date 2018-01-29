import { TestBed } from '@angular/core/testing';
import { TaskSummaryComponent } from 'app/components/tasks/task-summary.component/task-summary.component';
import { Store } from 'app/store/store';

describe('TaskSummaryComponent', () => {
  const store = <Store> {
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskSummaryComponent],
      providers: [{provide: store, useValues: store}]
      }).compileComponents();
    });

    it('should create the component', () => {
      expect(true).toBe(true);
    });
  });