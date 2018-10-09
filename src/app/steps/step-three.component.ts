import { Component, forwardRef } from '@angular/core';
import { WizardStep } from './wizard-step';

@Component({
    selector: 'step-three',
    template: '<div *ngIf="visible">Step Three</div>',
    providers: [
        {provide: WizardStep, useExisting: forwardRef(() => StepThreeComponent)}
    ]
})
export class StepThreeComponent implements WizardStep {
    visible = false;

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }
}
