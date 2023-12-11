import PriorityQueue from './priorityQueue';

/**
 * Simple task scheduler with prioritization using a priority queue.
 */
class Scheduler {
  private taskQueue: PriorityQueue<() => void> = new PriorityQueue<() => void>();

  /**
   * Adds a task to the scheduler with a specified priority.
   * @param {() => void} task - The task function to be added to the scheduler.
   * @param {number} priority - The priority of the task (lower values have higher priority).
   */
  addTask(task: () => void, priority: number): void {
    this.taskQueue.enqueue(task, priority);
  }

  /**
   * Runs the tasks in the scheduler in order of their priority.
   * @returns {Promise<void>} - A promise that resolves when all tasks are completed.
   */
  run(): Promise<void> {
    return new Promise((resolve) => {
      const executeNextTask = () => {
        const task = this.taskQueue.dequeue();
        if (task) {
          task();
          executeNextTask();
        } else {
          resolve();
        }
      };

      executeNextTask();
    });
  }
}

export default Scheduler;