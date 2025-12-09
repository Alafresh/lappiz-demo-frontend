import { Component, input, output, signal, effect } from '@angular/core';
import { PersonCreate } from '../../../core/api/models';

@Component({
  selector: 'app-interest-form-card',
  imports: [],
  templateUrl: './interest-form-card.html',
})
export class InterestFormCard {
  nombre = signal('');
  correo = signal('');
  errorMessage = signal('');
  errorConflict = input('');
  newPerson = output<PersonCreate>();

  constructor() {
    effect(() => {
      if (this.errorConflict()) {
        this.errorMessage.set(this.errorConflict());
      }
    });
  }

  addNewPerson() {
    if (!this.nombre() || !this.correo()) {
      this.errorMessage.set('Por favor completa todos los campos');
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
    this.errorMessage.set('');
  }
}
