import Model, { attr } from '@ember-data/model';

export default class ItemModel extends Model {
  @attr name;
  @attr brand;
  @attr rate;
  @attr released;
}
