goog.require('goog.dom');
goog.require('goog.ui.Button');
goog.require('goog.ui.LabelInput');
goog.require('goog.ui.Textarea');
goog.require('banksean.Mt19937');



var seed = new goog.ui.LabelInput('');
seed.render(goog.dom.getElement('seed'));
seed.setValue('1000');

var mt19937 = new banksean.Mt19937();
var out_mt19937 = new goog.ui.Textarea('');
out_mt19937.render(goog.dom.getElement('mt19937_result'));

var times = 100;

var button = new goog.ui.Button('Generate random');
button.render(goog.dom.getElement('rand_run_all'));

goog.events.listen(button,goog.ui.Component.EventType.ACTION, function(e) {
  var intseed = Number(seed.getValue());
  mt19937.srand(intseed);

  var mt19937result = '';
  var i;
  for (i = 0; i < times; i++) {
    mt19937result += mt19937.getInt32() + '\n';
  }
  out_mt19937.setValue(mt19937result);
});
