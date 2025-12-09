import { Component, input } from '@angular/core';
import { Person } from '../../../core/api/models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-interested-card',
  imports: [DatePipe],
  templateUrl: './interested-card.html',
})
export class InterestedCard {
  person = input.required<Person>();
}
