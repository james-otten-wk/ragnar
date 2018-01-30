import { TaskUpdateAction } from 'app/actions/tasks/task-update.action';
import { Task } from 'app/models/task';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

describe('TaskUpdateAction', () => {
  describe('execute', () => {
    it('updates task', () => {
      const store = new Store();
      const service = new TasksService(store);
      const action = new TaskUpdateAction(store, service);

      var task1 = new Task('task1');
      task1.id = 1;

      var task2 = new Task('task2');
      task2.id = 2;

      var task3 = new Task('task3');
      task3.id = 3;
      store.taskStore.allTasks.next([task1, task2, task3]);

      var updateTask = new Task('task1');
      updateTask.id = 1;
      updateTask.completed = true;

      action.execute(updateTask);

      expect(store.taskStore.allTasks.value.length).toBe(3);
      expect(store.taskStore.allTasks.value[0].completed).toBe(false);
      expect(store.taskStore.allTasks.value[0].id).toBe(3);
      expect(store.taskStore.allTasks.value[0].name).toBe('task3');

      expect(store.taskStore.allTasks.value[1].completed).toBe(false);
      expect(store.taskStore.allTasks.value[1].id).toBe(2);
      expect(store.taskStore.allTasks.value[1].name).toBe('task2');

      expect(store.taskStore.allTasks.value[2].completed).toBe(true);
      expect(store.taskStore.allTasks.value[2].id).toBe(1);
      expect(store.taskStore.allTasks.value[2].name).toBe('task1');
    });
  });
});