import Component from '@ember/component';
import layout from '../templates/components/tunnel-outlet';
import { get, set } from '@ember/object';

export default Component.extend({
  tagName: '',
  layout,

  outletName: 'main',

  didReceiveAttrs() {
    this._super(...arguments);

    let parentAttrs = Object.keys(this.attrs)
      .reduce((hash, attr) => {
        hash[attr] = get(this, attr);
        return hash;
      }, {});

    set(this, 'parentAttrs', parentAttrs);
  }
}).reopenClass({
  positionalParams: ['outletName']
});
