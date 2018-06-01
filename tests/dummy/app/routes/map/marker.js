import Route from '@ember/routing/route';

export default Route.extend({
  renderTemplate() {
    this.render('map.marker', {
      outlet: 'map'
    });
  }
});
