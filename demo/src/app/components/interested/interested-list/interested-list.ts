import { Component, input } from '@angular/core';
import { InterestedCard } from '../interested-card/interested-card';
import { Person } from '../../../core/api/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-interested-list',
  imports: [InterestedCard],
  templateUrl: './interested-list.html',
})
export class InterestedList {
  peopleList = input.required<Person[]>();
}
