function ListaSimples(value){
    this.key = new Array();
    this.key.push(value);

    function addValue(value){
        this.key.push(value);
    }
    function findValue(value){
        for (var index = 0; index < this.key.length; index++) {
            if(this.key[index]===value) return index;
        }
        alert("Value not Found");
    }
    function delValue(value){
        var index = this.findValue(value);
        this.key[index] = null;
        while(this.index < this.key.lenght){
            this.key[index] = this.key[index+1];
        }
    }
}
function ListaDuplamenteEncadeada(value){
    this.key=value;
    this.nxt=null;
    this.prev=null;

    function addValue(value){
        if(this.nxt != null){
            this.nxt=new ListaDuplamenteEncadeada(value);
            this.nxt.prev=this;
        }
        else this.nxt.addValue(value);
    }
    function findValue(value){
        if(this.key === value) return this;
        else this.nxt.findValue(value);    
    }
    function delValue(value){
        var lst = this.findValue(value);
        if(lst==null) alert("ERROR: TRYING TO DELETE INEXISTING VALUE");
        else{
            lst.prev.nxt=lst.nxt;
            lst.nxt.prev = lst.prev;
            lst=null;
        }
    }
}
function ListaEncadeada(value){
    this.key = value;
    this.nxt = null;

    function addValue(value){
        if(this.nxt != null) this.nxt = new ListaEncadeada(value);
        else this.nxt.addValue(value);
    }
    function findValue(value){
        if(this.key === value) return this;
        if(this.nxt == null){
            alert("VALUE NOT FOUND");
            return null;
        }
        else this.nxt.findValue(value);
    }
    function delValue(value){
        this.nxt.findValue(value) = null;
    }
}
function ListaCircular(value){
    this.key = value;
    this.nxt = null;
    this.prev = null;
    if(this.fst==null) this.fst = this;
    else this.fst = this.prev.fst;

    function addValue(value){
        this.nxt = new ListaCircular(value);
        this.nxt.prev = this;
        this.nxt.nxt=this.fst;
    }
    function findValue(value){
        if(this.key === value) return this;
        else if(this.nxt != this.fst) this.nxt.findValue(value);
        else{
            alert("VALUE NOT FOUND");
            return null;
        }
    }
    function delValue(value){
        var lst = this.findValue(value);
        if(lst===null) alert("ERROR: TRYING TO DELETE INEXISTING VALUE");
        else{
            lst.prev.nxt = lst.nxt;
            lst.nxt.prev = lst.prev;
            lst = null;
        }
    }
}
var lde = new ListaDuplamenteEncadeada(0);
var lc = new ListaCircular(0);
var le = new ListaEncadeada(0);
var ls = new ListaSimples(0);
lde.addValue(21);
for (var index = 0; index < 20; index++)  lde.addValue(Math.random()*100);
for (var index = 0; index < 20; index++)  le.addValue(Math.random()*100);
for (var index = 0; index < 20; index++)  lc.addValue(Math.random()*100);
for (var index = 0; index < 20; index++)  ls.addValue(Math.random()*100);

console.log("lde: "+ lde.key);
console.log("lc: "+ lc.key);
console.log("le: "+ le.key);
console.log("ls: "+ ls.key);

