console.log("L'accés a la ruta c:\\\\usuari\\\\tarda 1'23\"\ , considerat una mica \"lent\" en l'actualitat");


let userName = prompt("Pon tu nombre:");

let exitProgram = confirm("Quieres salir del programa programa?");

// Decision 
if (exitProgram) {
    alert("Abandonaste");
} else {
    alert("Continuaste");
}

// %c es un modificador de estilo
console.log("%cFI DEL PROGRAMA", "font-weight: bold; text-decoration: underline; color: blue;");


/*
Ç el codigo es 00C7
ç el codigo es 00E7
*/