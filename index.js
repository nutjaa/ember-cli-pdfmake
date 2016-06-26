/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-pdfmake' ,

  included: function(app) {
    this._super.included(app);

   	app.import(app.bowerDirectory +  '/pdfmake/build/pdfmake.min.js');
    app.import('vendor/vfs_fonts.js');

    app.import('vendor/pdfmakeloader.shim.js', {
            type: 'vendor',
            exports: { 'pdfmakeloader': ['default'] }
    });

  }
};
