const BinarySearchTree = require('./BST')

const BST = new BinarySearchTree()
BST.insert(3,3)
BST.insert(1,1);
BST.insert(4,4);
BST.insert(6,6);
BST.insert(9,9);
BST.insert(2,2);
BST.insert(5,5);
BST.insert(7,7);
// console.log(BST)

const BST2 = new BinarySearchTree()
BST2.insert('E', 'E');
BST2.insert('A', 'A');
BST2.insert('S', 'S');
BST2.insert('Y', 'Y');
BST2.insert('Q', 'Q');
BST2.insert('U', 'U');
BST2.insert('E', 'E');
BST2.insert('S', 'S');
BST2.insert('T', 'T');
BST2.insert('I', 'I');
BST2.insert('O', 'O');
BST2.insert('N', 'N');
// console.log(BST2)

function bst_height(tree) {
  return (
    Math.max(
      tree.left && bst_height(tree.left),
      tree.right && bst_height(tree.right)
    ) + 1
  );
}
// console.log(bst_height(BST2))

function isBST(bst) {
  if (bst.left) {
    if (bst.left.key > bst.key) {
      return false;
    }
    if (!isBST(bst.left)) {
      return false;
    }
  }
  if (bst.right) {
    if (bst.right.key < bst.key) {
      return false;
    }
    if (!isBST(bst.right)) {
      return false;
    }
  }
  return true;
}
// console.log(isBST(BST))

function thirdLargest(node, counter = 1) {
  if (!node) return console.log("not enough digits");
  if (counter === 3) return node.value;
  return (
    thirdLargest(node.right, counter + 1) ||
    thirdLargest(node.left, counter + 1)
  );
}
// console.log(thirdLargest(BST))

function _shortest(tree) {
  return (
    Math.min(
      tree.left && bst_height(tree.left),
      tree.right && bst_height(tree.right)
    ) + 1
  );
}

function balanced(node) {
  return bst_height(node) - _shortest(node) <= 1;
}