import { Component } from '@angular/core';
import { Store } from 'app/store/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'generated-component',
  templateUrl: 'generated.component.html',
  styleUrls: ['generated.component.scss']
})
export class GeneratedComponent {
  serverCounter$: BehaviorSubject<number>;
  items$: Observable<number[]>;

  constructor(store: Store) {
    this.items$ = store.homeStore.items$;
    this.serverCounter$ = store.homeStore.serverCounter$;
  }
}
