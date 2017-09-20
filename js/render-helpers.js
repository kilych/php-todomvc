var todoListRenderHelpers = {
  clear() {
    $('ul.todo-list').html('');
  },

  exists(id) {
    return $('li#todo-item' + id).length >= 1;
  },

  add(id) {
    $('ul.todo-list').append('<li id="todo-item' + id + '"</li>');
  },

  set(id, item) {
    var target = $('li#todo-item' + id);
    var checked = (item.status === 'completed') ? 'checked' : '';

    if (item.status === 'completed') {
      $('li#todo-item' + id).addClass('completed');
    } else $('li#todo-item' + id).removeClass('completed');

    target.html(
      '<div class="view"><input class="toggle" type="checkbox" '
        + checked + '><label>'
        + item.text
        + '</label><button class="destroy"></button></div><input class="edit" value=""></li>'
    );
  },

  setCounter() {
    var target = $('span.todo-count');
    var counter = count();
    var str = 'items';
    if (counter === 1) str = 'item';

    target.html('<strong>' + counter + '</strong> ' + str + ' left');

    function count() {
      var todos = $('ul.todo-list > li');
      var completed = $('ul.todo-list > li.completed');

      return todos.length - completed.length;
    }
  },
};
