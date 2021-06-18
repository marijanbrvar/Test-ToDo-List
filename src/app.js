/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import BasicLayout from './ui/BasicLayout';
import Job from './classes/Job';
import Task from './classes/Task';
import JobsLayout from './ui/JobsLayout';
import TaskLayout from './ui/TasksLayout';

class JobList {
  jobs = [
    new Job(1, 'MyFirstJob', true, [
      new Task(1, 'Task title', 'Some description', true, 'normal', '7/1/2021'),
    ]),
    new Job(2, 'Second job', false, []),
  ];

  render() {
    const jobLayout = new JobsLayout(this.jobs);
    jobLayout.render();
    const taskLayout = new TaskLayout(this.jobs[0].title, this.jobs[0].tasks);
    taskLayout.render();
  }
}

class App {
  static init() {
    BasicLayout.render();
    const jobList = new JobList();
    jobList.render();
  }
}

App.init();
