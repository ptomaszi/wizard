import { WizardStepDirective } from './../steps/wizard-step.directive';
import { Component, ContentChildren, AfterViewInit, QueryList } from '@angular/core';
import { WizardStep } from '../steps/wizard-step';

@Component({
    selector: 'wizard',
    template: `
        <ng-content>
        </ng-content>
        <button (click)="prev()" [disabled]="currentStep === 0">Prev</button>
        <button (click)="next()" [disabled]="currentStep === steps?.length-1">Next</button>
    `
})
export class WizardComponent implements AfterViewInit {
    @ContentChildren(WizardStepDirective, { read: WizardStep })

    querySteps: QueryList<WizardStep>;
    steps: Array<WizardStep>;
    currentStep: number;

    constructor() {
        this.currentStep = 0;
    }

    ngAfterViewInit() {
        this.steps = this.querySteps.toArray();
        this.steps[this.currentStep].show();
    }

    next() {
        if (this.currentStep >= this.steps.length - 1) {
            return;
        }
        this.steps[this.currentStep].hide();
        this.steps[++this.currentStep].show();
    }

    prev() {
        if (this.currentStep <= 0) {
            return;
        }
        this.steps[this.currentStep].hide();
        this.steps[--this.currentStep].show();
    }
}
