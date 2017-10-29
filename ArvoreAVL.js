class AVL_Tree{
    constructor(value){
        this.key = value;
        this.leftNode = null;
        this.rightNode = null;
    }
    addNode(value){
        if(value >=this.key){
            if(this.rightNode == null) this.rightNode = new AVL_Tree(value);
            else this.rightNode.addNode(value);
        } else if(this.leftNode == null) this.leftNode = new AVL_Tree(value);
        else this.leftNode.addNode(value);
    }
}