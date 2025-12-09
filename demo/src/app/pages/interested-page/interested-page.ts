import { Component } from '@angular/core';
import { Footer } from '../../components/shared/footer/footer';
import { InterestFormCard } from '../../components/interested/interest-form-card/interest-form-card';
import { DividerContent } from '../../components/shared/divider-content/divider-content';
import { InterestedList } from '../../components/interested/interested-list/interested-list';
import { HeaderComponent } from '../../components/shared/header-component/header-component';

@Component({
  selector: 'app-interested-page',
  imports: [Footer, InterestFormCard, DividerContent, InterestedList, HeaderComponent],
  templateUrl: './interested-page.html',
})
export class InterestedPage {}
