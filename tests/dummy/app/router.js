import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('map',  { path: '/' }, function() {
    this.route('marker', function() {
      this.route('info-window');
    });
  });
  this.route('no-map');
});

export default Router;
