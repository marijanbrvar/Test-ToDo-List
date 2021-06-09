export default class JobItem {
  constructor(job) {
    this.job = job;
  }

  render() {
    const job = document.createElement('a');
    job.className = 'menu-item';
    job.id = this.job.id;
    job.innerText = this.job.name;
    return job;
  }
}