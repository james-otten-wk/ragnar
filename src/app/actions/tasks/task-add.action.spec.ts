import { TaskAddAction } from 'app/actions/tasks/task-add.action';
import { Task } from 'app/models/task';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

describe('TaskAddAction', () => {
  describe('execute', () => {
    it('adds task', () => {
      const store = new Store();
      const service = new TasksService(store);
      const action = new TaskAddAction(store, service);

      action.execute(new Task('jbo'));

      expect(store.taskStore.allTasks.value.length).toBe(1);
    });
  });
});