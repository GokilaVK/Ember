import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AddItemController extends Controller {
  @service store;
  @service router;
  id = 1;
  brand = ['vivo', 'oppo', 'iphone', 'Redmi', 'Realmi', 'samsung'];
  @action
  addRecord() {
    this.store.createRecord('item', {
      id: this.id,
      name: this.name,
      brand: this.selectedbrand,
      rate: this.rate,
      released: this.released,
    });

    this.id = this.id + 1;
    this.name = '';
    this.selectedbrand = '';
    this.rate = '';
    this.released = '';
    this.transitionToRoute('items');
  }
}
