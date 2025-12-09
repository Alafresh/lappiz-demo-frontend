import { Component } from '@angular/core';
import { InterestedCard } from '../interested-card/interested-card';

@Component({
  selector: 'app-interested-list',
  imports: [InterestedCard],
  templateUrl: './interested-list.html',
})
export class InterestedList {}
