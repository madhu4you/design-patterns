/**
 * Iterator Pattern
 * The Iterator pattern is a pattern that allows you to effectively loop over a collection of objects.
 * A common programming task is to traverse and manipulate a collection of objects.
 * These collections may be stored as an array or perhaps something more complex, such as a tree or graph structure.
 * In addition, you may need to access the items in the collection in a certain order, such as, front to back, back to front,
 * depth first (as in tree searches), skip evenly numbered objects, etc.
 *
 * The Iterator design pattern solves this problem by separating the collection of objects from the traversal of
 * these objects by implementing a specialized 'iterator'!
 */

const items = [1, "Hello World", true, 3.1415];

class Iterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
    this.lastIndex = items.length - 1;
  }
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },
  next: function () {
    return this.items[this.index++];
  },
  hasPrev: function () {
    return this.lastIndex >= 0;
  },
  prev: function () {
    return this.items[this.lastIndex--];
  },
  length: function () {
    return this.items.length;
  },
};

const iter = new Iterator(items);
while (iter.hasNext()) {
  console.log(iter.next());
}

while (iter.hasPrev()) {
  console.log(iter.prev());
}
