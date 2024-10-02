//Jose Manuel Macias de la Torre

var operacion1 = 10 == 10;
alert("La operación 10 == 10 es: " + operacion1); // true

var operacion2 = 10 === 10;
alert("La operación 10 === 10 es: " + operacion2); // true

var operacion3 = 10 === 10.0;
alert("La operación 10 === 10.0 es: " + operacion3); // true

var operacion4 = "Laura" == "laura";
alert('La operación "Laura" == "laura" es: ' + operacion4); // false

var operacion5 = "Laura" > "laura";
alert('La operación "Laura" > "laura" es: ' + operacion5); // false

var operacion6 = "Laura" < "laura";
alert('La operación "Laura" < "laura" es: ' + operacion6); // true

var operacion7 = "123" == 123;
alert('La operación "123" == 123 es: ' + operacion7); // true

var operacion8 = "123" === 123;
alert('La operación "123" === 123 es: ' + operacion8); // false

var operacion9 = parseInt("123") === 123;
alert('La operación parseInt("123") === 123 es: ' + operacion9); // true

/*las conclusiones son las siguientes:
1. El operador == compara solo el valor.
2. El operador === compara el valor y el tipo.
3. Las cadenas de texto se comparan según caracteres.
4. La función parseInt convierte una cadena de texto a un número entero y despues es comparable de valor y tipo.

*/
