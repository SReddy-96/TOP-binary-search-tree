const Tree = require("./index.js");

const array = (size) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * size));
};

const tree = new Tree(array(100));
console.log("Is balanced =>", tree.isBalanced());
console.log("Level Order =>",tree.levelOrder());
console.log("In Order =>",tree.inOrder());
console.log("Pre-Order =>",tree.preOrder());
console.log("Post-Order =>",tree.postOrder());
tree.insert(101);
tree.insert(102);
tree.insert(103);
tree.insert(104);
console.log("Is balanced =>",tree.isBalanced());
tree.reBalance();
console.log("Is balanced =>",tree.isBalanced());
console.log("Level Order =>",tree.levelOrder());
console.log("In Order =>",tree.inOrder());
console.log("Pre-Order =>",tree.preOrder());
console.log("Post-Order =>",tree.postOrder());
tree.prettyPrint()
