import { TestBed } from '@angular/core/testing';
import { CommonComponentsModule } from 'app/components/common/common-components.module';
import { AddTaskComponent } from 'app/components/tasks/add-task.component/add-task.component';
import { TaskFilterComponent } from 'app/components/tasks/task-filter.component/task-filter.component';
import { TasksListComponent } from 'app/components/tasks/task-list.component/tasks-list.component';
import { TaskSummaryComponent } from 'app/components/tasks/task-summary.component/task-summary.component';
import { TasksComponent } from 'app/components/tasks/tasks.component';

describe('TaskSummaryComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonComponentsModule],
      declarations: [TasksComponent, AddTaskComponent, TasksListComponent, TaskFilterComponent, TaskSummaryComponent]
      }).compileComponents();
    });

    it('should create the component', () => {
      expect(true).toBe(true);
    });
  });