const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */




// class LinkedList {
// constructor() {
//     this.head = null;
//     this.teal = null;
//   }
// }

class LinkedListNode {
  constructor(value, next=null) {
      this.value = value;
      this.next = next;
    }
  }

class Queue {
  
  constructor() {
    this.head = null;
    this.teal = null;
  }
  getUnderlyingList() {
    return this.head
  }
  enqueue(value) {
    const noweNode= new LinkedListNode(value)

   if (!this.head || !this.teal) {
    this.head = noweNode;
    this.teal = noweNode;
    return this
   }

   this.teal.next=noweNode
   this.teal = noweNode;
   return this
  }
  dequeue() {
    let a = this.head.value
    this.head = this.head.next
    return a
    }

delete(value) {
  if (!this.head) {
    return null
  }
let deletedNode = null;
while (this.head && this.head.value===value) {
  deletedNode=this.head
this.head=this.head.next
}
let currentNode=this.head
if (currentNode!=null){
  while (currentNode.next){
    if(currentNode.next.value===value){
      deletedNode=currentNode.next
      currentNode.next=currentNode.next.next
    } else {
      currentNode=currentNode.next
    }
  }
}
if (this.teal?.value===value){
this.teal=currentNode
}

}



  }

const queue = new Queue();

module.exports = {
  Queue
};
