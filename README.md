# Binary Search Tree Implementation - The Odin Project

## Project Overview

This project involves creating a Balanced Binary Search Tree (BST) that takes an array, removes duplicates, sorts it, and constructs an efficient tree structure. The goal is to implement a BST that offers quick lookup, insertion, and deletion operations.

## Key Features

- Custom Tree class that converts array elements into nodes with left and right children for efficient navigation
- Handling of data duplications during tree creation and insertion
- Utilization of `module.exports` for easy integration into other projects
- Methods to check if the tree `isBalanced` and to `reBalance` when necessary

## Core Functionalities

- `insert(value)`: Adds a new node to the tree, avoiding duplicates
- `deleteItem(value)`: Removes a node and redistributes its children if necessary
- `find(value)`: Locates and returns the node with the given value
- Breadth-first traversal:
  - `levelOrder(callback)`: Traverses the tree level by level, optionally applying a callback function
- Depth-first traversals (all accept an optional callback):
  - `inOrder()`: Returns nodes in left => data => right order
  - `preOrder()`: Returns nodes in root => left => right order
  - `postOrder()`: Returns nodes in left => right => root order
- `height(node)`: Calculates the height of a given node (longest path to a leaf)
- `depth(node)`: Determines the depth of a given node (distance from the root)
- `isBalanced()`: Checks if the tree is balanced
- `reBalance()`: Restructures an unbalanced tree to achieve balance

## Challenges and Solutions

1. **Creating an array of unique values**: Solved using `[...new Set()]` to efficiently remove duplicates
2. **Exporting classes**: Implemented `module.exports` for the `Tree` class and used `const Tree = require('./index.js')` for importing
3. **Understanding depth vs. height**: Clarified that depth is measured from the root down, while height is measured from leaves up

## Skills Developed

- Advanced array manipulation techniques
- Module exporting and importing in JavaScript
- Deep understanding of tree structures and traversal algorithms
- Mastery of recursive functions and their application in tree operations

## Reflections

This project provided invaluable insights into the inner workings of Binary Search Trees. Key learnings include:

- The efficiency of BSTs in handling data insertion, deletion, and lookup
- The critical role of recursion in tree operations and the importance of proper base cases
- The distinction between breadth-first and depth-first traversals and their implementations
- Practical experience with stacks and queues, particularly in level-order traversal using an empty array to `push()` and `unshift()` nodes.

The use of VSCode's debugging tools proved crucial in understanding recursive function flow and identifying issues quickly.

## How to Use

1. Clone the repository:
   ```
   git clone https://github.com/SReddy-96/TOP-binary-search-tree.git
   ```

2. Navigate to the project directory:
   ```
   cd TOP-binary-search-tree
   ```

3. Run the script (if using Node.js):
   ```
   node index.js
   ```

Feel free to explore the code and test the various methods implemented in this Binary Search Tree project!

### Resources

- [Removing duplicates from an array in JavaScript](https://builtin.com/software-engineering-perspectives/remove-duplicates-from-array-javascript)
- [Traversing a Binary Search Tree in JavaScript](https://medium.com/@dondeveloper/algorithms-with-javascript-traversing-a-binary-search-tree-476e7dae9d88)
