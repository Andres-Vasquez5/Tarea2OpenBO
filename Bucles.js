/*
Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
Pista: Los números inferiores a 0 son negativos y los superiores, positivos.
*/

function bucles() {
    var numeroIf = 3;
    if (numeroIf < 0) {
        return "Es negativo";
    }
    else if (numeroIf > 0) {
        return "Es positivo"
    }
    else{
        return "Es 0"
    }
}
 console.log(bucles())


 /*
 Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:

° Incrementar el valor de la variable en uno cada vez que se ejecute.

° Mostrarlo por pantalla cada vez que se ejecute.
*/
function whilee() {
    var numeroWhile = -5;
while (numeroWhile < 3) {
    numeroWhile++;
    console.log(numeroWhile)
}
}
whilee()


/*
Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.
*/

function doWhile() {
   var numeroWhilee = -2
    do {
    numeroWhilee++
    console.log(numeroWhilee)
} while (numeroWhilee < numeroWhilee); 
}
doWhile()

/*
Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que 
la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.
*/

function cicloFor() {
    var numeroFor = 0;
    for (let i = 0; i <= 3; i++) {
        numeroFor++;
        console.log(numeroFor);
    }
}
cicloFor()

/*
Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año.
Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. 
También habrá que poner un default para cuando el valor de la variable no sea una estación.
*/

function switchh() {
    var estacion = "Otoño"
    switch (estacion) {
        case "Otoño":
            console.log("La estación actual es Otoño")
            break;
        case "Primavera":
            console.log("La estacion actual es Primavera")
            break;
        case "Verano":
            console.log("La estacion actual es  Verano")
            break;
        case "Invierno":
            console.log("La estacion actual es  Invierno")  
            break; 
        default:
            console.log("El valor actual no es una estación")
            
    }
}
switchh()