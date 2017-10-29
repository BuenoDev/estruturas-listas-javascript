class ListaDupla{
    constructor(value){
        this.key = value;
        this.nxt = null;
        this.prev = null;
    }
    addValue(value){
        if(this.nxt == null){
            this.nxt = new ListaDupla(value);
            this.nxt.prev = this;
        } else this.nxt.addValue(value);
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
        var el = this.findValue(value);
        if(el != null) this = null;
        else console.log("TRYING TO DELETE NON EXISTING VALUE");
    }

    showList(){
        var index;
        index = this;
        do{
            console.log(index.key);
            index = index.nxt;
        }while(index.nxt != null);
    }
}
