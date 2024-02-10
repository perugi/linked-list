# Linked List

A practice implementation of a Linked List in JavaScript as an ES6 Class, based on the specifications at: https://www.theodinproject.com/lessons/javascript-linked-lists.

## Usage

```js
const list = new LinkedList();
list.append(1);
list.append(2);
console.log(list.toString()); // ( 1 ) -> ( 2 ) -> null;
```

## Methods

The following class methods are implemented:

- `append(value)` adds a new node containing value to the end of the list.
- `prepend(value)` adds a new node containing value to the start of the list.
- `size()` returns the total number of nodes in the list.
- `head()` returns the first node in the list.
- `tail()` returns the last node in the list.
- `at(index)` returns the node at the given index.
- `pop()` removes the last element from the list.
- `contains(value)` returns true if the passed in value is in the list and otherwise returns false.
- `find(value)` returns the index of the node containing value, or null if not found.
- `toString()` returns the LinkedList objects as strings. The format is: ( value ) -> ( value ) -> ( value ) -> null
- `insertAt(value, index)` inserts a new node with the provided value at the given index.
- `removeAt(index)` removes the node at the given index.
