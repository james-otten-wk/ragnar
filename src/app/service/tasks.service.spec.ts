import { Task, TaskFilterType } from 'app/components/tasks/task';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

describe('TasksService', () => {
  let store: Store;
  let service: TasksService;
  beforeEach(() => {
    store = new Store();
    service = new TasksService(store);

    var task1 = new Task('task1');
    task1.id = 1;

    var task2 = new Task('task2');
    task2.id = 2;
    task2.completed = true;

    var task3 = new Task('task3');
    task3.id = 3;

    var tasks: Task[] = [task1, task2, task3];
    store.taskStore.allTasks.next(tasks);
  });

  describe('applyFilterUpdateSummary', () => {
    it('changes visible tasks', () => {
      store.taskStore.filter.next(TaskFilterType.completed);

      service.applyFilterUpdateSummary();

      expect(store.taskStore.allTasks.value.length).toBe(3);
      expect(store.taskStore.visibleTasks.value.length).toBe(1);
      expect(store.taskStore.visibleTasks.value[0].id).toBe(2);
      expect(store.taskStore.averageLength.value).toBe(5);
      expect(store.taskStore.completedTaskCount.value).toBe(1);
      expect(store.taskStore.notStartedTaskCount.value).toBe(0);
      expect(store.taskStore.lastAlphabetical.value).toBe('task2');
      expect(store.taskStore.totalCount.value).toBe(1);
    });

    it('changes visible tasks to not started', () => {
      store.taskStore.filter.next(TaskFilterType.NotStarted);

      service.applyFilterUpdateSummary();

      expect(store.taskStore.allTasks.value.length).toBe(3);
      expect(store.taskStore.visibleTasks.value.length).toBe(2);
      expect(store.taskStore.visibleTasks.value[0].id).toBe(3);
      expect(store.taskStore.visibleTasks.value[1].id).toBe(1);
      expect(store.taskStore.averageLength.value).toBe(5);
      expect(store.taskStore.completedTaskCount.value).toBe(0);
      expect(store.taskStore.notStartedTaskCount.value).toBe(2);
      expect(store.taskStore.lastAlphabetical.value).toBe('task3');
      expect(store.taskStore.totalCount.value).toBe(2);
    });

    it('changes visible tasks to not started', () => {
      store.taskStore.filter.next(TaskFilterType.all);

      service.applyFilterUpdateSummary();

      expect(store.taskStore.allTasks.value.length).toBe(3);
      expect(store.taskStore.visibleTasks.value.length).toBe(3);
      expect(store.taskStore.visibleTasks.value[0].id).toBe(3);
      expect(store.taskStore.visibleTasks.value[1].id).toBe(2);
      expect(store.taskStore.visibleTasks.value[2].id).toBe(1);
      expect(store.taskStore.averageLength.value).toBe(5);
      expect(store.taskStore.completedTaskCount.value).toBe(1);
      expect(store.taskStore.notStartedTaskCount.value).toBe(2);
      expect(store.taskStore.lastAlphabetical.value).toBe('task3');
      expect(store.taskStore.totalCount.value).toBe(3);
    });
  });

  describe('getNextId', () => {
    it('will get the next id', () => {
      expect(service.getNextId()).toBe(4);
    });

    it('will get the first id', () => {
      var emptyStore = new Store();
      var emptyService = new TasksService(emptyStore);

      expect(emptyService.getNextId()).toBe(0);
    });
  });
});
