export default class TaskHeader {
  constructor(tasks) {
    this.tasks = tasks;
  }

  currentJob() {
    const active = this.tasks.filter((item) => item.active === true);
    return active[0];
  }

  render() {
    const taskListHeader = document.createElement('div');
    const { name, jobtasks } = this.currentJob();
    taskListHeader.classList.add('Box-header', 'Box-header--blue');
    taskListHeader.innerHTML = `
      <h3 class="Box-title">
      ${name}
      <span class="Counter Counter--gray-dark ml-2">${jobtasks.length}</span>
      </h3>`;
    return taskListHeader;
  }
}