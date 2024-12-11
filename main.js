
function myFind(predicate) {
    for (let i = 0; i < this.length; i++) {
        const item = this[i];
        if (predicate(item, i, this)) {
            return item;
        }
    }
}

Array.prototype.myFind = myFind;


function myMap(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

Array.prototype.myMap = myMap;


function myFilter(predicate) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (predicate(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

Array.prototype.myFilter = myFilter;


function myReduce(callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

Array.prototype.myReduce = myReduce;


const letras = ["a", "b", "c", "d", "e", "f", "g"];
console.log(letras.myFind(l => l === "d")); 

const numeros = [1, 2, 3, 4];
console.log(numeros.myMap(n => n * 2)); 
console.log(numeros.myFilter(n => n % 2 === 0));
console.log(numeros.myReduce((acc, n) => acc + n, 0));
