'use strict';

export default class BinaryTree {

  constructor(root = null) {
    this.root = root;
  }

  // Root - Left - Right
  // Time - O(n) where n is the number of nodes
  // Space - O(H) where h is the height of the tree
  preOrder() {
    let results = [];

    let _traverse = node => {
      results.push(node.value);
      if(node.left) _traverse(node.left);
      if(node.right) _traverse(node.right);
    };
    _traverse(this.root);

    return results;
  }

  // Left - Right - Root
  // Time - O(n) where n is the number of nodes
  // Space - O(H) where h is the height of the tree
  postOrder() {
    let results = [];

    let _traverse = node => {
      if(node.left) _traverse(node.left);
      if(node.right) _traverse(node.right);
      results.push(node.value);
    };
    _traverse(this.root);

    return results;
  }

  // Left - Root - Right
  // Time - O(n) where n is the number of nodes
  // Space - O(H) where h is the height of the tree
  inOrder() {
    let results = [];

    let _traverse = node => {
      if(node.left) _traverse(node.left);
      results.push(node.value);
      if(node.right) _traverse(node.right);
    };
    _traverse(this.root);

    return results;
  }
}