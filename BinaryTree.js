class BinaryNode {
	constructor(left, right, data) {
		this.left = left;
		this.right = right;
		this.data = data;
	}

	setRight(right) {
		this.right = right;
	}

	setLeft(left) {
		this.left = left;
	}
}

class BinaryTree {
	constructor(arrayOfData) {
		this.root = new BinaryNode(null, null, arrayOfData[0]);
		for (let i = 1; i < arrayOfData.length; i++) {
			this.buildNode(this.root, arrayOfData[i]);
		}
	}

	buildNode(parent, data) {
		let node = new BinaryNode(null, null, data);

		if (parent.data > data) {
			if (parent.left) {
				this.buildNode(parent.left, data);
			} else {
				parent.setLeft(node);
			}
		} else {
			if (parent.right) {
				this.buildNode(parent.right, data);
			} else {
				parent.setRight(node);
			}
		}
	}

	inorder(node = this.root) {
		if (node) {
			this.inorder(node.left);
			console.log(node.data);
			this.inorder(node.right);
		}
	}

	breadthFirstTransversal() {
		let queue = [this.root];
		while (queue.length) {
			let treeNode = queue.shift();
			console.log(treeNode.data);
			if (treeNode.left) queue.push(treeNode.left);
			if (treeNode.right) queue.push(treeNode.right);
		}
	}
}

const binary_tree = new BinaryTree([8, 10, 3, 1, 6, 14, 4, 7, 13]);
// binary_tree.inorder();
binary_tree.breadthFirstTransversal();
