import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/i-action';
import { ValuesRepository } from 'app/repositories/values.repository';
import { Store } from 'app/store/store';

@Injectable()
export class HomeServerUpdatedAction implements IAction {
  constructor(
    private store: Store,
    private valuesRepository: ValuesRepository
  ) {}

  execute() {
    this.valuesRepository.getData().subscribe(value => {
      const items = [];
      for (let i = 0; i < value; i++) {
        items.push(i);
      }
      this.store.homeStore.items$.next(items);
      this.store.homeStore.serverCounter$.next(value);
    });
  }
}
