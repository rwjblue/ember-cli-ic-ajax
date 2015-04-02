'use strict';

module.exports = {
  name: 'Ember CLI ic-ajax',

  init: function(name) {
    this.treePaths['vendor'] = 'node_modules';
  },

  included: function(app) {
    var options = this.app.options.icAjaxOptions || {enabled: true};

    if (options.enabled) {
      this.app.import('vendor/ic-ajax/dist/named-amd/main.js', {
        exports: {
          'ic-ajax': [
            'default',
            'defineFixture',
            'lookupFixture',
            'raw',
            'request',
          ]
        }
      });
    }
  }
};
