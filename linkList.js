class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  insertBefore(item, nodeValue) {
    // if list is empty
    !this.head && console.log('List is empty');

    // if head contains node value
    this.head.value === nodeValue && this.insertFirst(item);

    let currNode = this.head;
    let prevNode = this.head;
    while (currNode.value !== nodeValue && currNode.next !== null) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    currNode.value === nodeValue
      ? (prevNode.next = new _Node(item, currNode))
      : console.log('Item not found');
  }
  insertAfter(item, nodeValue) {
    // if list is empty, nothing to match
    !this.head && console.log('List is empty');

    // if head contains nodeValue
    this.head.value === nodeValue && this.insertLast(item);

    let currNode = this.head;
    while (currNode.value !== nodeValue && currNode.next !== null) {
      currNode = currNode.next;
    }
    // if current node has the value, create a new node at the next position
    // make new node next, current node next
    currNode.value === nodeValue
      ? (currNode.next = new _Node(item, currNode.next)) // else no where to insert item
      : console.log('Item not found');
  }
  insertAt(item, position) {
    !this.head && console.log('List is empty');

    // index will start at 1
    let currPostition = 1;
    let currNode = this.head;
    let prevNode = this.head;
    while (currPostition !== position && currNode.next !== null) {
      prevNode = currNode;
      currNode = currNode.next;
      currPostition++;
    }

    currNode.next === null // if position is not found or reached
      ? console.log('Index error') // else create a new Node in plae of current Node
      : (prevNode.next = new _Node(item, currNode));
  }
}

module.exports = LinkedList;
