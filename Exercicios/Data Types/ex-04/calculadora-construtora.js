//function calculator () {
    //this.calculate = function (str) {
        //let cleanedStr = str.replace(/\s+/g, '');
        //let result = cleanedStr.match(/[+\-*/]/);
        //let op = result[0]
        
        //let [num1, num2] = cleanedStr.split(op).map(Number);

        //switch (op) {
            //case '+': return num1 + num2;
            //case '-': return num1 - num2;
            //case '*': return num1 * num2;
            //case '/': return num1 / num2;
            //default: return NaN;
        //}
    //}
//}

//let calc = new calculator;

//console.log(calc.calculate('1 + 2'));




function calculator() {
    this.calculate = function(str){
        let res = str.split(/[+\-*/]/).map(Number);

        switch(true) {
            case str.includes('+'): return r[0] + r[1];
            case str.includes('-'): return r[0] - r[1];
            case str.includes('*'): return r[0] * r[1];
            case str.includes('/'): return r[0] / r[1];
            default: return NaN;
        }
    }
    this.addMethod = function (str) {
        let r = str.split(/[+\-*/]/).map(Number);
        let a = str.split(' ').map(String);
        if(str.includes(/[+\-*/]/)) {
            switch(true) {
                case str.includes('+'): return r[0] + r[1];
                case str.includes('-'): return r[0] - r[1];
                case str.includes('*'): return r[0] * r[1];
                case str.includes('/'): return r[0] / r[1];
                default: return NaN;
            }   
        } else {
            
        }
    }
}

let calc = new calculator;

console.log(calc.addMethod('1 + 1'));
console.log(calc.calculate('10 * 10'));

