import { TaskFilterCompletedAction } from 'app/actions/tasks/task-filter-completed.action';
import { TaskFilterType } from 'app/components/tasks/task';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

describe('TaskFilterCompletedAction', () => {
  describe('execute', () => {
    it('sets filter to completed', () => {
      const store = new Store();
      const service = new TasksService(store);
      const action = new TaskFilterCompletedAction(store, service);

      action.execute();

      expect(store.taskStore.filter.value).toBe(TaskFilterType.completed);
    });
  });
});