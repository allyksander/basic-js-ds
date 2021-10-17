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

  has(data) {
    return this.find(data) ? true : false
  }

  find(data) {
    function search(node, data) {
      if (node === null) {
        return null
      } else if (data < node.data) {
        return search(node.left, data)
      } else if (data > node.data) {
        return search(node.right, data)
      } else {
        return node
      }
    }

    return search(this.rootNode, data)
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    function findMin(node) {
      if (node === null) {
        return null
      } else if (node.left === null) {
        return node.data
      } else {
        return findMin(node.left)
      }
    }

    return findMin(this.rootNode)
  }

  max() {
    function findMin(node) {
      if (node === null) {
        return null
      } else if (node.right === null) {
        return node.data
      } else {
        return findMin(node.right)
      }
    }

    return findMin(this.rootNode)
  }
}