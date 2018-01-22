import { Component, Input } from '@angular/core';
import { Store } from 'app/store/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'generated-data-component',
  templateUrl: 'generated-data.component.html',
  styleUrls: ['generated-data.component.scss']
})
export class GeneratedDataComponent {
  value$: Observable<number | null>;
  @Input() parentValue$: Observable<number>;
  @Input() Id: number;

  constructor(store: Store) {
    this.value$ = store.homeStore.counter$;
  }
}
