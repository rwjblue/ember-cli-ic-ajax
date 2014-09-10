'use strict';

module.exports = {
  name: 'Ember CLI ic-ajax',

  treeFor: function(name) {
    if (name !== 'vendor') { return; }

    return this.treeGenerator(path.join(__dirname, 'node_modules'));
  },

  included: function(app) {
    this._super.included(app);

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
