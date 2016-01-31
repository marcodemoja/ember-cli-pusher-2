var path = require('path');

module.exports = {
  name: 'Ember CLI Pusher',

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/pusher/dist/pusher.js');
    this.app.import(app.bowerDirectory + '/ember-pusher-2/ember-pusher.amd.js', {
      exports: {
        'ember-pusher/controller':    ['Controller'],
        'ember-pusher/bindings':      ['Bindings'],
        'ember-pusher/client_events': ['ClientEvents']
      }
    });
  }
}
