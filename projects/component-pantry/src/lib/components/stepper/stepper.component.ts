import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';

@Component({
    selector: 'nctv-stepper',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
    constructor(private ngZone: NgZone) {}
    /**
     * Array of steps to be displayed in the stepper.
     * Each step should be an object with 'label' and optionally 'completed'.
     */
    @Input() steps: { label: string; completed?: boolean }[] = [];
    /**
     * Index of the current active step.
     */
    @Input() currentStep: number = 0; // Ensure default is valid index

    @Output() finished = new EventEmitter<void>();

    onNext() {
        this.ngZone.run(() => {
            if (this.currentStep < this.steps.length - 1) {
                this.currentStep += 1;
            }
        });
    }

    onBack() {
        this.ngZone.run(() => {
            if (this.currentStep > 0) {
                this.currentStep -= 1;
            }
        });
    }

    onFinish() {
      this.ngZone.run(() => {
          this.finished.emit();
      });
  }
}