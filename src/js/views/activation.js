goog.provide('app.view.Activation');

goog.require('goog.ui.Container');
goog.require('goog.ui.Button');
goog.require('goog.events.InputHandler');

/**
 * @constructor
 */
app.view.Activation = function() {
   goog.base(this);
};
goog.inherits(app.view.Activation, goog.ui.Container);

/*
app.view.Activation.prototype.createDom = function() {
   this.decorateInternal(
      goog.dom.createDom('div', 'view activation')
   )
};
*/

app.view.Activation.prototype.createDom = function() {

   this.decorateInternal(
      goog.dom.createDom('div', 'activation',
         goog.dom.createDom('input', { 'class': 'code-num', type: 'tel' }),
         goog.dom.createDom('input', { 'class': 'code-pass', type: 'password' })
      )
   );
};

app.view.Activation.prototype.enterDocument = function() {
   goog.base(this, 'enterDocument');

   this.getElement().classList.add('activation');

   this.getElement().innerHTML = '<input class="code-num"><input class="code-pass">';

   this.inputEleNum = goog.dom.getElementByClass('code-num', this.getElement());
   this.inputElePass = goog.dom.getElementByClass('code-pass', this.getElement());

   this.btnActivation = new goog.ui.Button('Activate');

   this.getEventHandler()
      .listen(this.btnActivation,
      goog.ui.Component.EventType.ACTION,
      goog.bind(this.activate, this)
   );


   this.getEventHandler()
      .listen(new goog.events.InputHandler(this.inputEleNum),
      goog.events.InputHandler.INPUT,
      function(e) { console.log(e); }
   );

   this.addChild(this.btnActivation, true); 
};

app.view.Activation.prototype.getEventHandler = function() {
   return this.eventHandler_ || (this.eventHandler_ = new goog.events.EventHandler());
};

app.view.Activation.prototype.activate = function() {
   console.log(this.getEventHandler());
};
