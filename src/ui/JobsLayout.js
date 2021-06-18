/* eslint-disable no-restricted-syntax */
class JobsLayout {
  constructor(jobs) {
    this.jobs = jobs;
  }

  jobNav() {
    const jobNav = document.createElement('nav');
    jobNav.classList.add('menu', 'mt-6');
    jobNav.setAttribute('aria-label', 'Person settings');
    jobNav.innerHTML = '<span class="menu-heading color-bg-info" id="menu-heading">Job list</span>';

    for (const item of this.jobs) {
      const jobItem = document.createElement('a');
      jobItem.className = 'menu-item';
      jobItem.innerText = item.title;
      jobItem.id = item.id;
      if (item.active) {
        jobItem.setAttribute('aria-current', 'page');
      }

      jobNav.append(jobItem);
    }

    return jobNav;
  }

  render() {
    const target = document.querySelector('#jobs');
    target.append(this.jobNav());
    return target;
  }
}

module.exports = JobsLayout;
