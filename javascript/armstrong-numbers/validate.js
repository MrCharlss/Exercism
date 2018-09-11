function validate(num) {
  let exps = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let strNum = num.toString();
  let numerosElevar = [];
  let armsCheck = [];
  for (let i = 0; i < strNum.length; i++) {
    numerosElevar.push(strNum[i]);
  }
  numerosElevar.map(function(num) {
    let potencia = parseInt(numerosElevar.length - 1);
    armsCheck.push(Math.pow(parseInt(num), exps[potencia]));
  });
  let armstronNumber = armsCheck.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  if (num == armstronNumber) return true;
  else return false;
}

export default validate;
//validate(153);
