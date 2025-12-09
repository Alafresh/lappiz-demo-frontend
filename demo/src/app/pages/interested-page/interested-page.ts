import { Component, inject, signal } from '@angular/core';
import { Footer } from '../../components/shared/footer/footer';
import { InterestFormCard } from '../../components/interested/interest-form-card/interest-form-card';
import { DividerContent } from '../../components/shared/divider-content/divider-content';
import { InterestedList } from '../../components/interested/interested-list/interested-list';
import { HeaderComponent } from '../../components/shared/header-component/header-component';
import { PeoppleService } from '../../services/peopple-service';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs/operators';
import { PersonCreate } from '../../core/api/models';

@Component({
  selector: 'app-interested-page',
  imports: [Footer, InterestFormCard, DividerContent, InterestedList, HeaderComponent],
  templateUrl: './interested-page.html',
})
export class InterestedPage {
  public peopleService = inject(PeoppleService);

  private refreshTrigger = signal(0);

  public people = toSignal(
    toObservable(this.refreshTrigger).pipe(switchMap(() => this.peopleService.getPeopleClient())),
    { initialValue: [] }
  );

  onNewPerson(personData: PersonCreate) {
    this.peopleService.addPersonClient(personData).subscribe({
      next: (newPerson) => {
        console.log('Persona agregada:', newPerson);
        // Recarga la lista
        this.refreshTrigger.update((v) => v + 1);
      },
      error: (err) => {
        console.error('Error al agregar persona:', err);
        alert('Error al registrar la persona');
      },
    });
  }
}
