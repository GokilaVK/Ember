import EmberRouter from '@ember/routing/router';
import config from 'e-commerce/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('items', function () {
    this.route('item', { path: '/:item_id' });
  });
  this.route('add-item');
});
