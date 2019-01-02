//****** Linked List *****//

function LinkedList(){
	this.head = head;
	this.length = length;
}///Create a List

//Create a Node
function Node(data){
	this.data = null;
	this.next = null;
}


// An add Functionality to Linked List
LinkedList.prototype.add = function(value) {
	var node = new Node(value);//create new node
	currentNode = this.head;//Assign Current node to head:: Root in the 1st case
	
	if(!currentNode){ //1st use case Empty linked list
		this.head = node;
		this.length++;

		return node;
		}

    while(currentNode.next){ //use case Not an Empty Linked List
    	currentNode = currentNode.next;//traverse until next is null 
    }

    currentNode.next = node; //create node when null encounters in while loop

    this.length++;

    return node;

};


list = new LinkedList();
console.log(list.add(10));
console.log(list.add(20));
console.log(list.length);
console.log(list.head);


//Searching an element at certain position

LinkedList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this.length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
 
    // 1st use-case: an invalid position 
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: a valid position 
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
 
    return currentNode;
};


console.log(list.searchNodeAt(1));

LinkedList.prototype.addNodeAtPosition = function(value, position){
	var node = new Node(value);
	var currentNode = this.head,
        length = this.length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};

    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }   

    while(count < position) {
    	currentNode = currentNode.next;
        count++;
    }

    return currentNode.next = node;
    length++;
    	 
 
};


















