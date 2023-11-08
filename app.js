//Estan linea importa una biblioteca llamada "colors" que generalmente se utiliza para dar formato y color al texto que se imprime en la consola
    require("colors");
//Importamos el modulo llamado "math.js" que se encunetra directorio llamado "modules". Este módulo contiene funciones matemáticas.
    const math = require("./modules/math.js");
//Limpia la consola
    console.clear();
//Imprime el contenido del módulo "math.js" en la consola
    console.log(math);
//Se define una función asincrónica llamada main.
    const main = async() => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%".yellow);


    console.log("%              ".bgYellow+  "Funciones Matematicas".black+"                  %".bgYellow);
    
        
    console.log("-%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n".yellow);

    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%".blue)
                            console.log(math.add(20,5));
                            console.log(math.substract(15,5)); //=
                            console.log(math.multiply(9,8));
                            console.log(math.divide(3,0,9));
// imprime una serie de operaciones matemáticas utilizando las funciones importadas del módulo "math.js" suma,resta.multiplicacion.divicion
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n".blue);

    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%".red)
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%".red);


}
//para finalizar llamamos a la función main() al final del código para ejecutar el programa.
    main();
