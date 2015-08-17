'use strict';

module.exports = {
  name: 'Ember CLI ic-ajax',

  init: function(name) {
    var assets_path = require('path').join('ic-ajax','dist','cjs','main.js');
    this.treePaths['vendor'] = require.resolve('ic-ajax').replace(assets_path, '');
  },

  included: function(app) {
    var options = this.app.options.icAjaxOptions || {enabled: true};

    if (options.enabled) {
      this.ui.writeError('ember-cli-ic-ajax is deprecated in favour of ember-ajax. ' +
         'ember-cli-ic-ajax will be removed from app blueprint in ember-cli@2.0.0. ' +
         'https://github.com/ember-cli/ember-ajax#upgrade-from-ic-ajax');

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
