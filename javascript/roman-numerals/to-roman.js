

class ToString {
    constructor(value) {
        this.value = value;
        this.valores = {
            1: "I",
            5: "V",
            10: "X",
            50: "L",
            100: "C",
            500: "D",
            1000: "M"
        };

    }

    get val() {
        if (this.value < 10) {
            console.log(this.calcValor())
        }


        //this.printPant()
        //this.separaSimbolo()

    }
    separaSimbolo() {
        if (this.value < 10) {
            this.sepUni = String((this.value % 10))
            this.sepDec = String((Math.floor(this.value / 10)) * 10)
            console.log(this.valores[this.sepDec])

        }
    }
    calcSimbol() {
        if (this.value < 10) {
            this.calcValor()
        } else if (this.value > 10 && this.value < 100) {
            this.simbol = this.value / 10
        }
    }
    printPant() {
        console.log(this.roman)
    }
    calcValor() {
        if (this.value < 4) {
            this.roman = this.valores["1"]
            this.roman = this.roman.repeat(this.value)
            return (this.roman)
        } else if (this.value < 5) {
            this.roman = this.valores["1"] + this.valores["5"]
            return (this.roman)
        } else if (this.value == 5) {
            this.roman = this.valores["5"]
            return (this.roman)

        } else if (this.value == 10) {
            this.roman = this.valores["10"]
            return (this.roman)
        }
        else if (this.value > 8) {
            this.roman = this.valores["1"] + this.valores["10"]
            return (this.roman)

        } else if (this.value > 5) {
            this.value = Math.round(this.value % 5)
            this.roman = this.valores["5"] + this.valores["1"].repeat(this.value)
            return (this.roman)
        }

    }
    calcValorMasDiez() {
        if (this.value < 4) {
            this.roman = this.valores["1"]
            this.roman = this.roman.repeat(this.value)
            return (this.roman)
        } else if (this.value < 5) {
            this.roman = this.valores["1"] + this.valores["5"]
            return (this.roman)
        } else if (this.value == 5) {
            this.roman = this.valores["5"]
            return (this.roman)

        } else if (this.value == 10) {
            this.roman = this.valores["10"]
            return (this.roman)
        }
        else if (this.value > 8) {
            this.roman = this.valores["1"] + this.valores["10"]
            return (this.roman)

        } else if (this.value > 5) {
            this.value = Math.round(this.value % 5)
            this.roman = this.valores["5"] + this.valores["1"].repeat(this.value)
            return (this.roman)
        }

    }
}

let pruen = new ToString(7);
pruen.val

/* if (value <= 10) {
    if (value < 4) {
        roman = valores["1"]
        roman = roman.repeat(value)
        return (roman)
    } else if (value < 5) {
        roman = valores["1"] + valores["5"]
        return (roman)
    } else if (value == 5) {
        roman = valores["5"]
        return (roman)

    } else if (value == 10) {
        roman = valores["10"]
        return (roman)
    }
    else if (value > 8) {
        roman = valores["1"] + valores["10"]
        return (roman)

    } else if (value > 5) {
        value = Math.round(value % 5)
        roman = valores["5"] + valores["1"].repeat(value)
        return (roman)
    }

} */

// calculo el valor del simbolo tirando Math.floor y lo multiplico por 10
// tengo que encontrar la manera de substituirlo en la calculadora general...
// para que sea dinamico...
