import { TaskFilterIncompleteAction } from 'app/actions/tasks/task-filter-incomplete.action';
import { TaskFilterType } from 'app/components/tasks/task';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

describe('TaskFilterIncompleteAction', () => {
  describe('execute', () => {
    it('sets filter to NotStarted', () => {
      const store = new Store();
      const service = new TasksService(store);
      const action = new TaskFilterIncompleteAction(store, service);

      action.execute();

      expect(store.taskStore.filter.value).toBe(TaskFilterType.NotStarted);
    });
  });
});