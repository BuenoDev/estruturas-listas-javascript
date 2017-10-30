class AVL_Tree{
    constructor(value){
        this.key = value;
        this.parentNode = null;
        this.leftNode = null;
        this.rightNode = null;
    }
    addNode(value){
        if(value == null) console.log("CANNOT ADD NULL VALUE");
        else{
            if(value >= this.key){
                if(this.rightNode == null) {
                    this.rightNode = new AVL_Tree(value);
                    this.rightNode.parentNode = this;
                    console.log("VALUE ADDED");
                }
                else this.rightNode.addNode(value);
            } else if(this.leftNode == null) {
                this.leftNode = new AVL_Tree(value);
                this.leftNode.parentNode = this;
                console.log("VALUE ADDED");
            }
            else this.leftNode.addNode(value);
        }
    }
    findValue(value){
        if(this.key == value) return this;
        else if (value > this.key) this.rightNode.findValue(value);
        else this.leftNode.findValue(value);
    }
    deleteValue(value){ //readiciona os valores dos filhos , melhorar para apenas trocar ponteiros
        var el = this.findValue(value);
        function del(el){
            if(el.key > el.parentNode.key) el.parentNode.rightNode = null;
            else el.parentNode.rightNode = null;
        }

        function reloc(start,node){
            if(node.key > start.key){
                if(start.rightNode == null) start.rightNode = node;
                else reloc(start.rightNode , node);
            }else{
                if(start.leftNode == null) start.leftNode = node;
                else reloc(start.leftNode,node)
            }
        }

        if(el.rightNode == null && el.leftNode ==null) del(el);

        if(el.rightNode != null && el.leftNode == null){
            if(el.parentNode.rightNode == el){
                el.parentNode.rightNode = el.rightNode;
            }else if(el.rightNode.key < el.parentNode.rightNode.key){
                el.parentNode.leftNode = el.rightNode;
            }else {
                el.parentNode.leftNode = el.parentNode.rightNode;
                el.parentNode.rightNode = el.rightNode;
            }
        }
        if(el.rightNode == null && el.leftNode != null){
            if(el.parentNode.rightNode == el){
                el.parentNode.rightNode = el.leftNode;
            }else {
                el.parentNode.leftNode = el.leftNode;
            }
        }
        if(el.rightNode != null && el.leftNode != null){
            if(el.parentNode.rightNode == el){
                el.parentNode.rightNode = el.rightNode;
                reloc(el.rightNode,el.leftNode);
            }else if(el.rightNode.key > el.parentNode.rightNode.key){
                el.parentNode.leftNode = el.parentNode.rightNode;
                el.parentNode.rightNode = el.rightNode;
                reloc(el.rightNode,el.leftNode);
            }
        }
    }
    balanceTree(){
       
    }
}