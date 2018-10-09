export abstract class WizardStep {
  visible = false;
  abstract show();
  abstract hide();
}
