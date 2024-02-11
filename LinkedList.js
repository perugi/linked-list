const Node = require('./Node');

export default class LinkedList {
  headNode;

  constructor() {
    this.headNode = null;
  }

  append(value) {
    const node = new Node(value, null);

    if (!this.headNode) {
      // list is empty
      this.headNode = node;
    } else {
      this.tail().nextNode = node;
    }
  }

  prepend(value) {
    const node = new Node(value, this.headNode);

    this.headNode = node;
  }

  size() {
    let count = 0;
    let currentNode = this.headNode;

    while (currentNode) {
      count += 1;
      currentNode = currentNode.nextNode;
    }

    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    if (!this.headNode) {
      return null;
    }

    let currentNode = this.headNode;

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  at(index) {
    let currentNode = this.headNode;

    for (let i = 0; i < index; i += 1) {
      if (!currentNode) {
        throw new Error('Index out of bounds');
      }
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  pop() {
    if (this.size() === 0) {
      throw new Error('Cannot pop from an empty list');
    }

    this.at(this.size() - 2).nextNode = null;
  }

  contains(value) {
    let currentNode = this.headNode;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    let currentNode = this.headNode;
    let index = 0;

    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index += 1;
    }

    return null;
  }

  toString() {
    let currentNode = this.headNode;
    let string = '';

    while (currentNode) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    return `${string}null`;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const node = new Node(value, this.at(index));

    this.at(index - 1).nextNode = node;
  }

  removeAt(index) {
    if (this.size() === 0) {
      throw new Error('Cannot remove from an empty list');
    }

    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }

    this.at(index - 1).nextNode = this.at(index).nextNode;
  }
}

module.exports = LinkedList;
