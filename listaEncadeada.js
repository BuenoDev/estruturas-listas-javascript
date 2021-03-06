class ListaEncadeada{
    constructor(value){
        this.key = value;
        this.nxt = null;
    }
    addValue(value){
        if(this.nxt == null) this.nxt = new ListaEncadeada(value);
        else this.nxt.addValue(value);
    }
    findValue(value){
        if(this.key == value) return this;
        else if (this.nxt != null) this.nxt.findValue(value);
        else {
            console.log("VALUE NOT FOUND.");
            return null;
        }
    }
    deleteValue(value){
        var element = this.findValue(value);
        if(element != null){
            element.nxt.prev = el.prev;
            element.prev.nxt = el.nxt;
            element = null;
        } else console.log("TRYING TO DELETE NON EXISTING VALUE");
    }
    showList(){
        var index = this;
        do{
            console.log(index.key);
            index = index.nxt;
        }while(index != null);
    }
}