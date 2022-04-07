import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ItemsController extends Controller {
  @service store;
  @action
  deleteRecord(id) {
    console.log(id);
    let item = this.store.peekRecord('item', id);
    item.destroyRecord();
    console.log(this);
    this.transitionToRoute('items');
    this.send('reload');
  }
}
