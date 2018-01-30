import { TaskSelectAllUpdateAction } from 'app/actions/tasks/task-select-all-update.action';
import { Task } from 'app/models/task';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

describe('TaskSelectAllUpdateAction', () => {
  describe('execute', () => {
    it('selects all empty list', () => {
      const store = new Store();
      const service = new TasksService(store);
      const action = new TaskSelectAllUpdateAction(store, service);
      store.taskStore.allTasks.next([]);

      action.execute(true);

      expect(store.taskStore.allTasks.value.length).toBe(0);
    });

    it('selects all non-empty list', () => {
      const store = new Store();
      const service = new TasksService(store);
      const action = new TaskSelectAllUpdateAction(store, service);
      store.taskStore.allTasks.next([new Task('task1'), new Task('task2')]);

      action.execute(true);

      expect(store.taskStore.allTasks.value.length).toBe(2);
      expect(store.taskStore.allTasks.value[0].completed).toBe(true);
      expect(store.taskStore.allTasks.value[1].completed).toBe(true);
    });

    it('selects none non-empty list', () => {
      const store = new Store();
      const service = new TasksService(store);
      const action = new TaskSelectAllUpdateAction(store, service);

      var task1 = new Task('task1');
      task1.completed = true;

      var task2 = new Task('task2');

      store.taskStore.allTasks.next([task1, task2]);

      action.execute(false);

      expect(store.taskStore.allTasks.value.length).toBe(2);
      expect(store.taskStore.allTasks.value[0].completed).toBe(false);
      expect(store.taskStore.allTasks.value[1].completed).toBe(false);
    });
    
  });
});