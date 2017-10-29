class ListaCircular{
    constructor(value){
        this.key = value;
        this.nxt = this;
        this.prev = this;
    }
    addValue(value){
        if(this.nxt == null){
            var fst = this.nxt;
            this.nxt = new ListaCircular(value);
            this.nxt.nxt = fst;
            this.nxt.prev = this;
        }else this.nxt.addValue(value;)
    }
}
