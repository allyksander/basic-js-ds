const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    const newNode = new Node(data)

    function addNode(currentNode, newNode) {
      if (newNode.data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode
        } else {
          addNode(currentNode.left, newNode)
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode
        } else {
          addNode(currentNode.right, newNode)
        }
      }
    }

    if (this.rootNode === null) {
      this.rootNode = newNode
    } else {
      addNode(this.rootNode, newNode)
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}