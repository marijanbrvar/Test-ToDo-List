class BasicLayout {
  static render() {
    this.body = document.querySelector('BODY');
    this.header = document.createElement('div');
    this.header.classList.add('Header', 'mb-');
    this.header.innerHTML = `
    <div class="Header-item"><a href="/" class="Header-link">Things need to be done!</a></div>
    `;
    this.body.prepend(this.header);

    this.container = document.querySelector('.container');
    this.container.classList.add('container-md', 'clearfix');

    this.jobs = document.createElement('div');
    this.jobs.id = 'jobs';
    this.jobs.classList.add('col-sm-12', 'col-md-4', 'float-left', 'p-2');

    this.tasks = document.createElement('div');
    this.tasks.id = 'tasks';
    this.tasks.classList.add('col-sm-12', 'col-md-8', 'float-left', 'p-2');
    this.container.append(this.jobs, this.tasks);
  }
}

module.exports = BasicLayout;