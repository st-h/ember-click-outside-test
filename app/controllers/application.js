import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {

  @tracked _showComponent = false;
  @tracked _showModifier = false;

  @action
  toggleComponent() {
    if (this._showComponent) {
      this._showComponent = false;
    } else {
      this._showComponent = true;
    }
  }

  @action
  toggleModifier() {
    if (this._showModifier) {
      this._showModifier = false;
    } else {
      this._showModifier = true;
    }
  }
}
