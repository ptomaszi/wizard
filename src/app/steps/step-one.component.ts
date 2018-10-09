import { Component, forwardRef } from '@angular/core';
import { WizardStep } from './wizard-step';

@Component({
    selector: 'step-one',
    template: '<div *ngIf="visible">Step One</div>',
    providers: [
        { provide: WizardStep, useExisting: forwardRef(() => StepOneComponent) }
    ]
})
export class StepOneComponent implements WizardStep {
    visible = true;

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }
}
