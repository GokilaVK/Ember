import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class ItemsRoute extends Route {
  @service store;

  model() {
    console.log(this.store.peekAll('item').toArray());
    return this.store.peekAll('item').toArray();
  }
  @action
  reload() {
    this.refresh();
  }
}
