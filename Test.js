
function inflateList(list, size){
    for (var index = 1; index < size; index++) {
        list.addValue(Math.random() * 100);
    }
}

var ld = new listaDupla(1);
console.log(ld.key);