function LinkedList(){
	this.head = null;
	this.length = null;
}

function Node(data){
	this.data = null;
	this.next = null;
}

LinkedList.prototype.add = function(data) {
	var node = new Node(data);

	var current;
	current = this.head;
	if(current == null)
	{
		this.head = node;
		this.length++;
	}
	
		while(current.next){
			current = current.next;
		}
		current.next = node;
	this.length++;
	return node;
};

var list = new LinkedList();
list.add(10);

LinkedList.prototype.reverse = function(){
	var prev = nell;
	var current = this.head;
	var next;
	while(current.next){
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
	this.head = current;
	return current;


};

