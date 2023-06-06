import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-button-signal',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <p>Button Signal</p>
    <ul class="list single-line">
      <li>{{ fullName() }}.</li>
      <li>{{ fullName() }}.</li>
      <li>{{ fullName() }}.</li>
    </ul>
    <p>Computed signal: {{ fullName() }}</p>
    <sdx-button label="Standalone Button" (click)="setName('John')"></sdx-button>
  `,
})
export class ButtonSignalComponent {
  firstName = signal('Jane');
  lastName = signal('Doe');
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  constructor() {
    console.log('signal button started');
    effect(() => console.log('Name changed:', this.fullName()));
  }

  setName(newName: string) {
    this.firstName.set(newName);
  }
}
