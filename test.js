import LinkedList from './LinkedList.mjs';

const list = new LinkedList();

console.log(`New list: ${list.toString()}`);
console.log(`List size when empty: ${list.size()}`);
console.log(`List tail when empty: ${list.tail()}`);
console.log(`List head when empty: ${list.head()}`);
console.log(`Contains when empty: ${list.contains('test')}`);
console.log(`Find when empty: ${list.find('test')}`);
// console.log(`Popping when empty: ${list.pop()}`); // Thows error
// console.log(`At when empty: ${list.at(1)}`); // Throws error
// console.log(`removeAt when empty: ${list.removeAt(0)}`); // Throws error
// console.log(`insertAt when empty: ${list.insertAt('test', 1)}`); // Throws error
list.insertAt(0, 0); // This works, inserting value of 0 at index 0
list.append(1);
list.append(2);
list.append(3);
list.prepend('test');
list.prepend('test2');
console.log(`List after appending/prepending: ${list.toString()}`);
console.log(`List size after appending/prepending: ${list.size()}`);
console.log(`List tail: ${list.tail().value}`);
console.log(`List head: ${list.head().value}`);
console.log(`Value at index 2: ${list.at(2).value}`);
// console.log(`At when index out of bounds: ${list.at(1000).value}`); // Throws error
list.pop();
console.log(`List after popping once: ${list.toString()}`);
list.pop();
console.log(`List after popping the second time: ${list.toString()}`);
console.log(`List contains value 'test': ${list.contains('test')}`);
console.log(`List contains value 'test3': ${list.contains('test3')}`);
console.log(`Index of value 1: ${list.find(1)}`);
console.log(`Index of value test3: ${list.find('test3')}`);
list.insertAt('inserted', 2);
console.log(`List after inserting at index 2: ${list.toString()}`);
// console.log(`Inserting at index out of bounds: ${list.insertAt('test', 1000)}`); // Throws error
list.removeAt(2);
console.log(`List after removing from index 2: ${list.toString()}`);
// console.log(`Removing at index out of bounds: ${list.removeAt(1000)}`); // Throws error
