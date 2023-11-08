
const Math = {};
////Define la funcion suma(add)
    function add(a,b){
    return a + b;
}

//Define la funcion Restar(substract)
    function substract(a,b){
    return a - b;
}
//Define la funcion Multiplicar(multiply)
    function multiply(a,b){
    return a * b;
}
//Define la funcion Dividir(divide)
    function divide(a,b){
    if (b == 0){
        return "NO SE PUEDE DIVIDIR POR 0".blue;
    }else{
        return a / b ;
    }
}
//se exportan las funciones :)
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;