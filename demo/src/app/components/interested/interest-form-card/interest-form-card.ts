import { Component, output, signal } from '@angular/core';
import { PersonCreate } from '../../../core/api/models';

@Component({
  selector: 'app-interest-form-card',
  imports: [],
  templateUrl: './interest-form-card.html',
})
export class InterestFormCard {
  nombre = signal('');
  correo = signal('');

  newPerson = output<PersonCreate>();

  addNewPerson() {
    if (!this.nombre() || !this.correo()) {
      return;
    }

    const newPerson: PersonCreate = {
      nombre: this.nombre(),
      correo: this.correo(),
    };

    this.newPerson.emit(newPerson);
    this.resetFields();
  }

  resetFields() {
    this.nombre.set('');
    this.correo.set('');
  }
}
