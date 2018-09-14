class Converter {
  convert(arr, from, to) {
    this.arr = arr;
    this.from = from;
    this.to = to;
    let convertido = [];
    let valorBaseAnterior = 0;
    let exp = this.arr.length - 1;
    for (let i = 0; i < this.arr.length; i++) {
      let fromTotal = this.arr[i] * Math.pow(this.from, exp - i);
      valorBaseAnterior = valorBaseAnterior + fromTotal;
    }
    console.log(valorBaseAnterior);
    for (let i = 0; i < valorBaseAnterior.toString().length; i++) {
      convertido.push(parseInt(valorBaseAnterior.toString()[i]));
    }
    return convertido;
  }
}

//let prueba = new Converter();
//prueba.convert([5], 10, 2);

export default Converter;
