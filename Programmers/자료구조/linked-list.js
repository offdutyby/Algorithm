class Node {
  constructor(value) {
    this.value = value;
    this.pointerToNext = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.pointerToNext;
    }
    return currentNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.pointerToNext = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.pointerToNext = node.pointerToNext;
    node.pointerToNext = newNode;
  }

  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.pointerToNext;
    }

    if (prevNode.pointerToNext !== null) {
      prevNode.pointerToNext = prevNode.pointerToNext.pointerToNext;
    }
  }
}
