import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DefaultComponent {
  actions = signal<string[]>([]);
  counter = signal(0);

  increment() {
    // this.counter.update((oldCounterVal) => oldCounterVal + 1);
    this.counter.set(this.counter() + 1);
    this.actions.mutate((oldActions) => oldActions.push('INCREMENT'));
  }

  decrement() {
    this.counter.update((oldCounterVal) => oldCounterVal - 1);
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
  }
}
