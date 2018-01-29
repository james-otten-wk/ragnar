import { TaskRemoveAction } from 'app/actions/tasks/task-remove.action';
import { Task } from 'app/components/tasks/task';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

describe('TaskRemoveAction', () => {
  describe('execute', () => {
    it('removes task', () => {
      const store = new Store();
      const service = new TasksService(store);
      const action = new TaskRemoveAction(store, service);

      var task1 = new Task('task1');
      task1.id = 1;

      var task2 = new Task('task2');
      task2.id = 2;

      store.taskStore.allTasks.next([task1, task2]);

      action.execute(task2);

      expect(store.taskStore.allTasks.value.length).toBe(1);
      expect(store.taskStore.allTasks.value[0].id).toBe(1);
      expect(store.taskStore.allTasks.value[0].name).toBe('task1');
    });
  });
});