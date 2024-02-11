const Node = require('./Node');

class LinkedList {
  headNode;

  constructor() {
    this.headNode = null;
  }

  /**
   * Append a new node with the given value to the end of the linked list.
   *
   * @param {type} value - the value to be appended
   */
  append(value) {
    const node = new Node(value, null);

    if (!this.headNode) {
      // list is empty
      this.headNode = node;
    } else {
      this.tail().nextNode = node;
    }
  }

  /**
   * Adds a new node with the given value to the beginning of the linked list.
   *
   * @param {type} value - the value to be added to the linked list
   */
  prepend(value) {
    const node = new Node(value, this.headNode);

    this.headNode = node;
  }

  /**
   * Returns the size of the linked list.
   *
   * @return {number} The size of the linked list.
   */
  size() {
    let count = 0;
    let currentNode = this.headNode;

    while (currentNode) {
      count += 1;
      currentNode = currentNode.nextNode;
    }

    return count;
  }

  /**
   * Returns the head node.
   *
   * @return {Node} Head node
   */
  head() {
    return this.headNode;
  }

  /**
   * Returns the tail node.
   *
   * @return {Node} Tail node
   */
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

  /**
   * Retrieve the node at the specified index.
   *
   * @param {number} index - The index of the node to retrieve
   * @return {Node} The node at the specified index
   */
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

  /**
   * Remove the last element from the list.
   */
  pop() {
    if (this.size() === 0) {
      throw new Error('Cannot pop from an empty list');
    }

    this.at(this.size() - 2).nextNode = null;
  }

  /**
   * Check if the linked list contains a specific value.
   *
   * @param {type} value - the value to check for in the linked list
   * @return {boolean} true if the value is found, false otherwise
   */
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

  /**
   * Find the index of the first occurrence of the given value in the linked list.
   *
   * @param {type} value - The value to search for in the linked list
   * @return {number|null} The index of the first occurrence of the value, or null if the value is not found
   */
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

  /**
   * Converts the linked list to a string representation in the format of
   * ( value ) -> ( value ) -> ( value ) -> null
   *
   * @return {string} the string representation of the linked list
   */
  toString() {
    let currentNode = this.headNode;
    let string = '';

    while (currentNode) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    return `${string}null`;
  }

  /**
   * Inserts a value at the specified index in the linked list.
   *
   * @param {any} value - the value to be inserted
   * @param {number} index - the index at which the value should be inserted
   */
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const node = new Node(value, this.at(index));

    this.at(index - 1).nextNode = node;
  }

  /**
   * Removes an element at the specified index.
   *
   * @param {number} index - the index of the element to be removed
   */
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

  /**
   * Perform a search using the given search function. Returns the first node that
   * satisfies the search function.
   *
   * @param {function} searchFunction - The function used to search for a specific node.
   * @return {Node|null} The found node or null if not found.
   */
  search(searchFunction) {
    let currentNode = this.headNode;

    while (currentNode) {
      if (searchFunction(currentNode)) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
    }

    return null;
  }
}

module.exports = LinkedList;
