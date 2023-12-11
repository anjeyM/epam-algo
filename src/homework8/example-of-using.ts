import Scheduler from './scheduler';

const scheduler = new Scheduler();

scheduler.addTask(() => console.log('Task 1 executed'), 2);
scheduler.addTask(() => console.log('Task 2 executed'), 1);
scheduler.addTask(() => console.log('Task 3 executed'), 3);

scheduler.run().then(() => {
  console.log('All tasks completed');
});
