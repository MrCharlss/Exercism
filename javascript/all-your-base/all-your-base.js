class Converter {
  converter(arr, from, to) {
    this.arr = arr;
    this.from = from;
    this.to = to;
    let exp = this.arr.length - 1;
    for (let i = 0; i < this.arr.length; i++) {
      let fromVal = this.from.toString() + "^" + (exp - i);
      console.log(fromVal);
    }
  }
}

let prueba = new Converter();
prueba.converter([1, 2, 3, 4, 5], 2, 3);
