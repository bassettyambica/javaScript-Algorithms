function Node(data){
	this.data = data;
	this.left = null;
	this.right = null;
}

function BST(){
	this.root = 0;
	this.left = null;
	this.right = null;
}

BST.prototype.addNode = function(value) {
	var node = new Node(value);
	
	var currentNode = this.root;
	if(!currentNode){
		this.root = node.data;
		this.left = null;
		this.right =null;

		return node;
	}
	

		while(value > currentNode.data)
		{
			currentNode = currentNode.right;
			 currentNode.right = node;


		}

		
		while(value < currentNode.data)
		{
			currentNode = currentNode.left;
		
		currentNode.left = node;
	}


	return node;

};