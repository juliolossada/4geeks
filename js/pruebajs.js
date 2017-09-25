

function validar(){

/*creo una variable de tipo booleana que en principio tendrá un valor true(verdadero), 
y que retornaremos en false(falso) cuando nuestra condición no se cumpla*/
var todo_correcto = true;

/*El primer campo que comprobamos es el del nombre. Lo traemos por id y verificamos 
la condición, en este caso, por ejemplo, le decimos que tiene que tener más de 2 dígitos 
para que sea un nombre válido. Si no tiene más de dos dígitos, la variable todo_correcto 
devolverá false.*/

if(document.getElementById('nombre').value.length < 2 ){
    todo_correcto = false;
}

/*Hacemos lo mismo con el campo dirección. En este caso le pediremos al usuario que 
introduzca al menos 10 caracteres.*/
if(document.getElementById('direccion').value.length < 10 ){
    todo_correcto = false;
}

/*Para comprobar la edad, utilizaremos la función isNaN(), que nos dirá si el valor 
ingresado NO es un número (NaN son las siglas de Not a Number). Si la edad no es un 
número, todo_correcto será false.*/
if(isNaN(document.getElementById('edad').value)){
    todo_correcto = false;
}

/*Para comprobar el email haremos uso de una expresión regular. Esto es una secuencia 
de caracteres que nos dirá si el valor ingresado por el usuario tiene estructura de 
correo electrónico. Lo que hacemos es obtener el value del campo de texto destinado 
al email, y le aplicamos el método test() del objeto global RegExp(que nos permite 
trabajar con expresiones regulares).*/
var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
var email = document.form1.email.value;
if (!expresion.test(email)){
    todo_correcto = false;
}

/*Para validar el select debemos añadir un value distinto a cada option. En el 
código, he asignado un value con  valor vacío al primer option. Los siguientes, 
al no estar definidos toman el valor por defecto. Por tanto, si todos tienen value, 
lo único que tenemos que comprobar es que este no sea vacío. Si es vacío, todo_correcto 
será false.*/
if(document.getElementById('estudios').value == ''){
    todo_correcto = false;
}

/*Validaremos también el checkbox del formulario. Todos los 
checkbox tienen una propiedad llamada checked. Entonces 
hacemos el if y decimos que si nuestro checkbox NO está 
checked, estará mal.*/
if(!document.getElementById('acepto').checked){
    todo_correcto = false;
}

/*Por último, y como aviso para el usuario, si no está todo bién, osea, si la variable 
todo_correcto ha devuelto false al menos una vez, generaremos una alerta advirtiendo 
al usuario de que algunos datos ingresados no son los que esperamos.*/
if(!todo_correcto){
alert('Algunos campos no están correctos, vuelva a revisarlos');
}

return todo_correcto;
}

