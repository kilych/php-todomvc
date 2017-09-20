// not function declaration cause it "hoists" above vars
var todoListRender = function(helpers, id) {
  if (id == undefined) {
    helpers.clear();
    helpers.get().forEach(function (item, i) {
      helpers.add(i);
      helpers.set(i, item);
    });
  } else {
    var item = helpers.get(id);
    if (!helpers.exists(id)) helpers.add(id);
    helpers.set(id, item);
  }

  helpers.setCounter();
}
