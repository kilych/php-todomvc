(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

    $(document).ready(function () {
      setTodoCount();

      $('.toggle').click(toggle);

      $("label[for='toggle-all']").click(toggleAll);

      $('button.destroy').click(remove);

      $('button.clear-completed').click(removeCompleted);
    });

    function add() {}

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
