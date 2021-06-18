class Task {
  constructor(id, title, desc, status, weigth, due) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.status = status;
    this.weigth = weigth;
    this.due = due;
  }
}

module.exports = Task;