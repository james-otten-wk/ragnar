import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ValuesRepository {
  constructor(private httpClient: HttpClient) {}

  getServerNumber(): Observable<number> {
    return this.httpClient
      .get<string>('https://api.github.com/users')
      .map(d => d.length);
  }
}
