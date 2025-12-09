import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment';
import { Person } from '../core/api/models';
import { getPeople, addPerson } from '../core/api/functions';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeoppleService {
  private http = inject(HttpClient);

  getPeopleClient(): Observable<Person[]> {
    return getPeople(this.http, environment.baseUrl).pipe(map((res) => res.body));
  }
  addPersonClient(person: Person) {
    addPerson(this.http, environment.baseUrl, { body: person } as any);
  }
}
