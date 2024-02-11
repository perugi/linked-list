class Node {
  #value;

  #nextNode;

  constructor(value, nextNode) {
    this.#value = value;
    this.#nextNode = nextNode;
  }

  set value(value) {
    this.#value = value;
  }

  get value() {
    return this.#value;
  }

  set nextNode(nextNode) {
    this.#nextNode = nextNode;
  }

  get nextNode() {
    return this.#nextNode;
  }
}

module.exports = Node;
