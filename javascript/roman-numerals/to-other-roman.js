
function aValor(value) {
    let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let inRoman = ""
    let num = value
    for (let i = 0; i < decimals.length; i++) {
        while (num >= decimals[i]) {
            inRoman += romans[i]
            num -= decimals[i]
            if (num == 0) {
                break
            }
        }

    } console.log(inRoman)
}
aValor(141)