import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ItemsItemController extends Controller {
  @service store;
  @tracked editRateValue = false;
  @tracked newRate = '';

  @action
  editRate() {
    this.editRateValue = true;
  }

  @action
  editRecord(id) {
    var abc = this.store.peekRecord('item', id);
    abc.rate = this.newRate;
  }

  @action
  close() {
    this.editRateValue = false;
  }
}
