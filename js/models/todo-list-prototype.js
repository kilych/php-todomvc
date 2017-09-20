var todoListPrototype = {
  add(item = {}) {
    this.lastId += 1;
    var id = this.lastId;
    var text = item.text || '';
    var status = item.status || 'active';

    this.list[id] = { text, status };

    this.render();
  },

  get(id) {
    if (id == undefined) return this.list;
    if (this.list[id] != undefined) return this.list[id];
    return false;
  },

  update(id, item = {}) {
    if (this.list[id] != undefined) this.list[id] = item;
    this.render(id);
  },

  toggle(id) {
    var item = this.get(id);
    if (item) {
      item.status = (item.status === 'active') ? 'completed' : 'active';
      this.render(id);
    }
  },

  remove(id) {
    if (this.list[id] != undefined) delete this.list[id];
    this.render();
  },

  removeCompleted() {
    this.list = this.list.filter(function (item) {
      return item.status !== 'completed';
    });
    this.render();
  },
};
