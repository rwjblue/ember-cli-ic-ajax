'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLIICAjax(project) {
  this.project = project;
  this.name    = 'Ember CLI ic-ajax';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLIICAjax.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules/ember-cli-ic-ajax', name);

  if (this.app.env !== 'production' && fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIICAjax.prototype.included = function included(app) {
  this.app = app;
  var options = this.app.options.icAjaxOptions || {enabled: true};

  if (options.enabled) {
    this.app.import('vendor/ic-ajax/ic-ajax.js', {
                    'ic-ajax': [
                      'default',
                      'defineFixture',
                      'lookupFixture',
                      'raw',
                      'request',
                    ]
    });
  }
};

module.exports = EmberCLIICAjax;
