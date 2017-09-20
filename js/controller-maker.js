var todoListControllerMaker = function(model) {
  function add(target) {
    var text = target.val().trim();
    target.val('');

    if (text) {
      text = encode(text);
      model.add({ text, status: 'active' });
    }
  }

  function encode(str) {
    var p = document.createElement("p");
    p.textContent = str;
    return p.innerHTML;
  }

  function remove() {
    var id = getId($(this).parent().parent());
    model.remove(id);
  }

  function getId(li) {
    var id = li.attr('id');
    id = id.split('item');
    id = Number(id[1]);
    return id;
  }

  function removeCompleted() {
    model.removeCompleted();
  }

  function toggle() {
    var id = getId($(this).parent().parent());
    model.toggle(id);
  }

  function toggleAll() {}

  function edit() {}

  return {
    add,
    encode,
    remove,
    getId,
    removeCompleted,
    toggle,
    toggleAll,
    edit,
  };
};
