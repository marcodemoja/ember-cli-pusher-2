var path = require('path');

module.exports = {
  name: 'Ember CLI Pusher',

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/pusher/dist/pusher.js');
    this.app.import(app.bowerDirectory + '/ember-pusher-2/ember-pusher-2.amd.js', {
      exports: {
        'ember-pusher-2/controller':    ['Controller'],
        'ember-pusher-2/bindings':      ['Bindings'],
        'ember-pusher-2/client_events': ['ClientEvents']
      }
    });
  }
}
