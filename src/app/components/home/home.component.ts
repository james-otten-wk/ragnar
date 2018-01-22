import { Component } from '@angular/core';
import { ValuesService } from 'app/service/values.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  data$: Observable<number>;

  constructor(private valuesService: ValuesService) {}

  update() {
    this.data$ = this.valuesService.getValue();
  }
}
