import { TaskFilterAllAction } from 'app/actions/tasks/task-filter-all.action';
import { TaskFilterType } from 'app/models/task';
import { TasksService } from 'app/service/tasks.service';
import { Store } from 'app/store/store';

describe('TaskFilterAllAction', () => {
  describe('execute', () => {
    it('sets filter to all', () => {
      const store = new Store();
      const service = new TasksService(store);
      const action = new TaskFilterAllAction(store, service);

      action.execute();

      expect(store.taskStore.filter.value).toBe(TaskFilterType.all);
    });
  });
});