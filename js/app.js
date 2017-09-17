(function (window) {
  'use strict';

  // Your starting point. Enjoy the ride!

  $(document).ready(function () {
    var ENTER_KEY = 13;

    $('.new-todo').keypress(function (event) {
      if (event.which === ENTER_KEY) {
        add($(this));
      }
    });

    $("label[for='toggle-all']").click(toggleAll);

    $('button.clear-completed').click(removeCompleted);

    init();
});

  function init() {
    $('button.destroy').click(remove);

    $('.toggle').click(toggle);

    setTodoCount();
  }

  function add(target) {
    var text = target.val().trim();
    target.val('');

    if (text) {
      text = encode(text);

      $('ul.todo-list').append(
        '<li><div class="view"><input class="toggle" type="checkbox"><label>'
          + text + '</label><button class="destroy"></button></div><input class="edit" value=""></li>'
      );

      init();
    }
  }

  function encode(str) {
    var p = document.createElement("p");
    p.textContent = str;
    var converted = p.innerHTML;

    return converted;
  }

  function remove() {
    var button = $(this);

    button.parent().parent().remove();
    setTodoCount();
  }

  function removeCompleted() {
    var completed = $('ul.todo-list > li.completed');

    completed.remove();
    setTodoCount();
  }

  function count() {
    var todos = $('ul.todo-list > li');
    var completed = $('ul.todo-list > li.completed');

    return todos.length - completed.length;
  }

  function setTodoCount() {
    var target = $('span.todo-count');
    var counter = count();
    var str = 'items';
    if (counter === 1) str = 'item';

    target.html('<strong>' + counter + '</strong> ' + str + ' left');
  }

  function toggle() {
    var target = $(this);

    if (target.is(':checked')) {
      target.parent().parent().addClass('completed');
    } else {
      target.parent().parent().removeClass('completed');
    }

    setTodoCount();
  }

  function toggleAll() {
    $('.toggle').each(function () {
      var target = $(this);

      if (target.is(':checked')) {
        target.parent().parent().addClass('completed');
      } else {
        target.parent().parent().removeClass('completed');
      }

      setTodoCount();
    });
  }

  function toggleCheckbox(target) {
    if (target.is(':checked')) {
      target.parent().parent().addClass('completed');
    } else {
      target.parent().parent().removeClass('completed');
    }
  }

  function edit() {}
})(window);
