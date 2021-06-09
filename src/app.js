/* eslint-disable no-restricted-syntax */
import Job from './classes/Job';
import Task from './classes/Task';
import JobItem from './ui/JobItem';
import TaskItem from './ui/TaskItem';
import TaskHeader from './ui/TaskHeader';
import { header } from './ui/util';

class JobList {
  jobs = [
    new Job(1, 'MyList', true, [
      new Task(
        1,
        'New task Title',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem ipsa ut sit nesciunt quisquam culpa, consequatur error.',
        'normal',
        '',
        true,
      ),
      new Task(
        2,
        'New task Title 2',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem ipsa ut sit nesciunt quisquam culpa, consequatur error.',
        'medium',
        '',
        false,
      ),
    ]),
    new Job(2, 'Second Job', false, []),
  ]

  render() {
    const renderHook = document.querySelector('.container');
    const taksList = document.createElement('div');
    taksList.classList.add('col-sm-12', 'col-md-8', 'float-left', 'p-2');
    const jobList = document.createElement('div');
    jobList.classList.add('col-sm-12', 'col-md-4', 'float-left', 'p-2');
    jobList.id = 'list';
    const jobNav = document.createElement('nav');
    jobNav.classList.add('menu', 'mt-6');
    const jobNavTitle = document.createElement('span');
    jobNavTitle.innerHTML = '<span class="menu-heading color-bg-info" id="menu-heading">Job list</span>';

    const taskListHeader = new TaskHeader(this.jobs);
    const taskListHeaderTitle = taskListHeader.render();
    taksList.append(taskListHeaderTitle);

    jobNav.append(jobNavTitle);
    jobList.append(jobNav);

    for (const item of this.jobs) {
      const job = new JobItem(item);
      const jobItem = job.render();
      jobNav.append(jobItem);
      for (const task of item.jobtasks) {
        const newTask = new TaskItem(task);
        const newTaskItem = newTask.render();
        taksList.appendChild(newTaskItem);
      }
    }
    renderHook.append(header(), jobList, taksList);
  }
}

const jobList = new JobList();
jobList.render();
