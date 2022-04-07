import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ItemRoute extends Route {
  @service store;
  model(params) {
    return this.store.peekRecord('item', params.item_id);
  }
}
