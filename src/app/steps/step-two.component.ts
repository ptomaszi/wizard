import { Component, forwardRef } from '@angular/core';
import { WizardStep } from './wizard-step';

@Component({
    selector: 'step-two',
    template: '<div *ngIf="visible">Step Two</div>',
    providers: [
        {provide: WizardStep, useExisting: forwardRef(() => StepTwoComponent)}
    ]
})
export class StepTwoComponent implements WizardStep {
    visible = false;

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }
}
