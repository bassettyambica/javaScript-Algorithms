function BinaryNode(key, value){
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;    
}

BinaryNode.prototype.add = function(key, value){    
    var node = this;
    if(node.key == null  ){
        node.key = key;
        node.value = value;  
        return;
    }
    while(node){                
        if(node.key <= key){  
            if(node.right == null){
                node.right = new BinaryNode(key, value);
                return;
            }else{
                node = node.right;
            }
        }else{  
            if(node.left == null){
                node.left = new BinaryNode(key, value);
                return;
            }else{
                node = node.left;
            }
        }
    }
}
BinaryNode.prototype.find = function(key){    
    var root = this;
    while(root){
        if(key == root.key)
            return root.value;
    
        if(key < root.key){
            root = root.left;
        }
        else{
            root = root.right; 
        }
    }
    return -1;
}

var obj = { mama: "мама", papa: "тато", word: "слово", job:"робота", tree: "дерево" };
var tree = new BinaryNode(null, null);
for(prop in obj){
    tree.add(prop, obj[prop]);
}
console.log(tree);
console.log(tree.find("mama"));