class MinHeap {
  constructor(heap = []) {
    this.heap = heap;
    this.heapify();
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  delete() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);

    return min;
  }

  heapify() {
    for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
      this.sinkDown(i);
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) {
        break;
      }
        
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  sinkDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallest = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
      smallest = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.sinkDown(smallest);
    }
  }
}

function solution(scoville, K) {
  const heap = new MinHeap(scoville);
  let answer = 0;

  while (heap.heap[0] < K) {
    if (heap.heap.length === 1) {
      return -1;
    }
    const min1 = heap.delete();
    const min2 = heap.delete();
    const newScoville = min1 + min2 * 2;
    heap.insert(newScoville);
    answer += 1;
  }

  return answer;
}