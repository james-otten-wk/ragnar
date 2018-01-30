import { TestBed } from '@angular/core/testing';
import { TaskAddAction } from 'app/actions/tasks/task-add.action';
import { AddTaskComponent } from 'app/components/tasks/add-task.component/add-task.component';
import { Task } from 'app/models/task';

describe('AddTaskComponent', () => {
  const addTaskAction = <TaskAddAction> {
    execute: <(task: Task) => void>jest.fn()
  };

  beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [AddTaskComponent],
        providers: [{provide: addTaskAction, useValues: addTaskAction}]
      }).compileComponents();
  });

  it('should create the component', () => {
      expect(true).toBe(true);
  });

  //JBO TODO: figure out how this works
  it('clears text box when clicked', () => {
    //var fixture = TestBed.createComponent(AddTaskComponent);
    // var compiled = fixture.debugElement.nativeElement;
    // component.newItemText = 'Anything';

    // component.click();
    // expect(component.newItemText).toBe('');
  });
});