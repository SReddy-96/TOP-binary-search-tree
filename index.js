// Binary Search Tree

const numberArray = [
  80, 9, 700, 40, 1, 5, 200, 10000, 33, 54, 6, 77, 56, 99, 10, 0, 0, 9, 700, 80,
];

// print nodes in terminal
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.rightNode !== null) {
    prettyPrint(node.rightNode, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.key}`);
  if (node.leftNode !== null) {
    prettyPrint(node.leftNode, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// compares the numbers with each other using a callback
function compareNumbers(a, b) {
  return a - b;
}

// creates a unique collection of values
function removeDuplication(array) {
  return [...new Set(array)];
}

// find min key from a node with two children
function minKey(node) {
  let currentMin = node.key;
  while (node.leftNode !== null) {
    currentMin = node.leftNode.key;
    node = node.leftNode;
  }
  return currentMin;
}

// node
class Node {
  constructor(key, leftNode = null, rightNode = null) {
    this.key = key;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // build tree from an array
  buildTree(array, start = 0, end = array.length - 1) {
    // base case
    if (start > end) {
      return null;
    }
    // find middle and save the middle to a node
    const middle = Math.floor((start + end) / 2);
    let node = new Node(array[middle]);

    // set left node and right node of the middle node
    node.leftNode = this.buildTree(array, start, middle - 1);
    node.rightNode = this.buildTree(array, middle + 1, end);

    return (this.root = node);
  }

  // insert a node
  insert(key) {
    this.root = insertItem(this.root, key);
  }

  // delete a node
  delete(key) {
    this.root = deleteItem(this.root, key);
  }

  // find the value in the tree
  find(key) {
    // check if key is not null
    if (key === null) {
      return false;
    }

    //   initialize root and traverse the tree
    let current = this.root;
    while (current !== null) {
      if (key === current.key) {
        return current;
      } else if (key < current.key) {
        current = current.leftNode;
      } else if (key > current.key) {
        current = current.rightNode;
      }
    }
    return false;
  }

  // print the order of the tree in breadth-first level
  levelOrder(callback) {
    // base case
    if (this.root === null) {
      return;
    }
    let result = [];
    let queue = [];
    queue.push(this.root);

    //   iterate over tree and use a queue to add the nodes to an array.
    while (queue.length) {
      let current = queue[0];
      result.push(current.key); // print current
      if (current.leftNode != null) queue.push(current.leftNode);
      if (current.rightNode != null) queue.push(current.rightNode);
      if (callback) callback(current);
      queue.shift(); // remove current from queue
    }
    if (!callback) return result; // only returns result if no callback
  }

  // returning the tree nodes in order
  inOrder(callback, root = this.root, result = []) {
    //   base case
    if (root) {
      this.inOrder(callback, root.leftNode, result);
      if (callback) callback(root.key);
      result.push(root.key);
      this.inOrder(callback, root.rightNode, result);
    }

    if (!callback) return result;
  }

  // returning the tree nodes checking root first then left then right
  preOrder(callback, root = this.root, result = []) {
    if (root) {
      if (callback) callback(root.key);
      result.push(root.key);
      this.preOrder(callback, root.leftNode, result);
      this.preOrder(callback, root.rightNode, result);
    }

    if (!callback) return result;
  }

  // returning the tree nodes checking left and right then the root
  postOrder(callback, root = this.root, result = []) {
    if (root) {
      this.postOrder(callback, root.leftNode, result);
      this.postOrder(callback, root.rightNode, result);
      if (callback) callback(node.value);
      result.push(root.key);
    }
    if (!callback) return result;
  }

  // height of binary tree
  height(node, root = this.root, height = 0) {
    if (root) {
      if (node === root.key) return height;
      this.height(node, root.leftNode, height++);
      if (node === root.key) return height;
      this.height(node, root.rightNode, height++);
      if (node === root.key) return height;
    }
  }
}

// insert a node
function insertItem(root, key) {
  //  turn into node if no this
  if (root === null) {
    root = new Node(key);
    return root;
  }

  // Otherwise, recur down the tree
  if (key < root.key) root.leftNode = insertItem(root.leftNode, key);
  else if (key > root.key) root.rightNode = insertItem(root.rightNode, key);

  // Return the (unchanged) node pointer
  return root;
}

function deleteItem(root, key) {
  // base case
  if (root === null) {
    return root;
  }

  // recur through the tree
  if (key < root.key) root.leftNode = deleteItem(root.leftNode, key);
  else if (key > root.key) root.rightNode = deleteItem(root.rightNode, key);
  else {
    // if the node has one child
    if (root.leftNode === null) return root.rightNode;
    else if (root.rightNode === null) return root.leftNode;

    // if the node has two children
    root.key = minKey(root.rightNode);

    // delete the in-order child
    root.rightNode = deleteItem(root.rightNode, root.key);
  }
  return root;
}

const sortedArray = removeDuplication(numberArray.sort(compareNumbers));
console.log(sortedArray);
const tree = new Tree();
tree.buildTree(sortedArray);
prettyPrint(tree.root);
tree.insert(11);
prettyPrint(tree.root);
tree.delete(10);
console.log(tree.find(11));
prettyPrint(tree.root);
console.log(tree.levelOrder());
console.log(tree.inOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.height(10000));
