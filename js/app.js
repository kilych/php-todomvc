(function (window) {
  'use strict';

  var todoList = Object.create(window.todoListPrototype);
  var ctrl = todoListControllerMaker(todoList);
  todoList.lastId = todoListDefault.lastId;
  todoList.list = todoListDefault.list;
  todoListRenderHelpers.get = todoListPrototype.get.bind(todoList);
  todoList.render = function(id) {
    todoListRender(todoListRenderHelpers, id);

    $('button.destroy').click(ctrl.remove);
    $('.toggle').click(ctrl.toggle);
  };

  $(document).ready(function () {
    var ENTER_KEY = 13;
    $('.new-todo').keypress(function (event) {
      if (event.which === ENTER_KEY) {
        ctrl.add($(this));
      }
    });

    $("label[for='toggle-all']").click(ctrl.toggleAll);
    $('button.clear-completed').click(ctrl.removeCompleted);

    todoList.render();
  });
})(window);
