import { StepTwoComponent } from './steps/step-two.component';
import { WizardStepDirective } from './steps/wizard-step.directive';
import { WizardComponent } from './wizard/wizard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StepOneComponent } from './steps/step-one.component';
import { StepThreeComponent } from './steps/step-three.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    WizardStepDirective,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
