import Component from '@ember/component';
import layout from '../templates/components/-outlet-with-args';
import { get, setProperties } from '@ember/object';

export default Component.extend({
  tagName: '',
  layout,

  didReceiveAttrs() {
    this._super(...arguments);

    let controller = get(this.outletState, `outlets.${this.outletName}.render.controller`);

    if (controller) {
      setProperties(controller, this.parentAttrs);
    }
  }
});
