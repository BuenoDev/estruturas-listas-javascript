class ListaCircular{
    constructor(value){
        this.key = value;
        this.nxt = this;
        this.prev = this;
        this.fst = this;
    }
    addValue(value){
        if(this.nxt == null){
            this.nxt = new ListaCircular(value);
            this.nxt.nxt = this.fst;
            this.nxt.fst = this.fst;
            this.nxt.prev = this;

        }else this.nxt.addValue(value);
    }
    findValue(value){
        if(this.key === value) return this;
        else if(this.nxt != this.fst) this.nxt.findValue(value);
        else{
            console.log("VALUE NOT FOUND");
            return null;
        }
    }
    deleteValue(value){
        var element = this.findValue(value);
        if(element === null){
            console.log("TRYING TO DELETE NON EXISTING VALUE");
        }else{
            element.prev.nxt = element.nxt;
            element.nxt.prev = element.prev;
            element = null;
        }
    }
    showList(){
        var index = this;
        do{
            console.log(index.key);
            index = index.nxt;
        }while(index.nxt != this.fst);
    }
}
