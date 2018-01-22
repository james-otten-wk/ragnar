import { Injectable } from '@angular/core';
import { ValuesRepository } from 'app/repositories/values.repository';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ValuesService {
  constructor(private valuesRepository: ValuesRepository) {}

  getValue(): Observable<number> {
    return this.valuesRepository.getServerNumber();
  }
}
