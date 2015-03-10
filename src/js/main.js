goog.provide('app.main');

goog.require('app.view.Activation');
goog.require('goog.ui.Container');

/**
 * @constructor
 */
app.main = function() {
   goog.base(this);
};
goog.inherits(app.main, goog.ui.Container);

/*
 */
app.main.prototype.enterDocument = function() {
   goog.base(this, 'enterDocument');

   console.log('here');

   this.addChild(new app.view.Activation(), true);
};

