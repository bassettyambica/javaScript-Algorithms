function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.insertNode = function (val) {
  var node = {
    data : val, 
    left : null, 
    right : null
  };

  var currentNode;
  
  if (!this.root) {
    this.root = node;
  } else {
    currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = node;
            break;
          } else {
            currentNode = currentNode.left;
          }
      } else if (val > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        console.log('Ignoring this value as the BST supposed to be a tree containing UNIQUE values');
        break;
      }
    }    
  }
};



BinarySearchTree.prototype.inOrderTraversal = function (root) {

  if (root.left) {
    this.inOrderTraversal(root.left);
  } 
  
  console.log(root.data);
    
  if (root.right) {
    this.inOrderTraversal(root.right);
  }
};

// Create a new Balanced Binary Tree as a sample input
// http://js-interview.tutorialhorizon.com/2015/10/12/create-a-binary-search-tree-in-javascript/
var BST = new BinarySearchTree();
BST.insertNode(10);
BST.insertNode(15);
BST.insertNode(5);
BST.insertNode(2);
BST.insertNode(3);
BST.insertNode(12);
BST.insertNode(17);

BST.inOrderTraversal(BST.root);







