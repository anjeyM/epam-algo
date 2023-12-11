  /**
 * Priority Queue implementation using a min-heap structure.
 * @template T - Type of elements in the priority queue.
 */
class PriorityQueue<T> {
    private heap: {priority: number; value: T}[] = [];
  
    private swap(index1: number, index2: number): void {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    private getParentIndex(index: number): number {
      return Math.floor((index - 1) / 2);
    }
  
    private getLeftChildIndex(index: number): number {
      return 2 * index + 1;
    }
  
    private getRightChildIndex(index: number): number {
      return 2 * index + 2;
    }
  
    private heapifyUp(): void {
      let currentIndex = this.heap.length - 1;
  
      while (currentIndex > 0) {
        const parentIndex = this.getParentIndex(currentIndex);
  
        if (this.heap[currentIndex].priority < this.heap[parentIndex].priority) {
          this.swap(currentIndex, parentIndex);
          currentIndex = parentIndex;
        } else {
          break;
        }
      }
    }
  
    private heapifyDown(): void {
      let currentIndex = 0;
  
      while (true) {
        const leftChildIndex = this.getLeftChildIndex(currentIndex);
        const rightChildIndex = this.getRightChildIndex(currentIndex);
        let smallestChildIndex = currentIndex;
  
        if (
          leftChildIndex < this.heap.length &&
          this.heap[leftChildIndex].priority < this.heap[smallestChildIndex].priority
        ) {
          smallestChildIndex = leftChildIndex;
        }
  
        if (
          rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex].priority < this.heap[smallestChildIndex].priority
        ) {
          smallestChildIndex = rightChildIndex;
        }
  
        if (smallestChildIndex !== currentIndex) {
          this.swap(currentIndex, smallestChildIndex);
          currentIndex = smallestChildIndex;
        } else {
          break;
        }
      }
    }
    
    /**
     * Enqueues a value with a given priority to the priority queue.
     * @param {T} value - The value to be enqueued.
     * @param {number} priority - The priority of the value (lower values have higher priority).
     */
    enqueue(value: T, priority: number): void {
      this.heap.push({ value, priority });
      this.heapifyUp();
    }
    
    /**
     * Dequeues the value with the highest priority from the priority queue.
     * @returns {T | undefined} - The dequeued value, or undefined if the priority queue is empty.
     */
    dequeue(): T | undefined {
      if (this.isEmpty()) {
        return undefined;
      }
  
      const removedValue = this.heap[0].value;
      const lastItem = this.heap.pop();
  
      if (this.heap.length > 0 && lastItem) {
        this.heap[0] = lastItem;
        this.heapifyDown();
      }
  
      return removedValue;
    }
    
    /**
     * Checks if the priority queue is empty.
     * @returns {boolean} - True if the priority queue is empty, false otherwise.
     */
    isEmpty(): boolean {
      return this.heap.length === 0;
    }
  }
  
  export default PriorityQueue;
  