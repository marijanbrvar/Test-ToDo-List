export default class Task {
  constructor(id, title, description, weigth, due, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.weigth = weigth;
    this.due = due;
    this.completed = completed;
  }
}