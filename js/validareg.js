(function(){
 var formulario = document.getElementsByName('formulario')[0],
 elementos = formulario.elements,
 boton = document.getElementById('btn');

var validarNombre = function(e){
	if ((formulario.name.value == 0)||(formulario.name.value.length < 3)){
		alert('Ingrese un nombre valido');
		e.preventDefault();


	}
};

var validarApellido = function(e){
	if (formulario.lastname.value == 0){
		alert('Complete el campo apellido');
		e.preventDefault();
	}
}

var validarRatio = function(e){

	if (formulario.gender[0].checked == true || formulario.gender[1].checked == true) {

	}
	else{
		alert('Seleccione un genero');
		e.preventDefault();
	}
}
var validarDireccion = function(e){
	if (formulario.address.value == 0){
		alert('Complete el campo direccion');
		e.preventDefault();
	}
}
var validarEdad = function(e){
	if ((isNaN(document.getElementById('age').value)) || (formulario.age.value.length == 0)){
			alert('Ingrese una edad valida')
			e.preventDefault();
	}
}
var validarCel = function(e){
	if ((isNaN(document.getElementById('cell').value)) || (formulario.cell.value.length == 0)){
			alert('Ingrese un numero de telefono valido')
			e.preventDefault();
	}
}
var validarCheckbox = function(e){
	if (formulario.terminos.checked == false) {
		alert('Debe aceptar los terminos y condiciones')
		e.preventDefault();

	}
}
var validarId = function(e){
	if (formulario.cedula.value == 0) {
		alert('Debe ingresar un ID valido')
		e.preventDefault();

	}
}

var validarPass = function(e){
	if ((formulario.password.value) !== (formulario.password2.value)){
		alert('Las claves no coinciden');
		e.preventDefault();
	}  
}

var validarEmail = function(e){
	correo = document.getElementById('email')
	emailregex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if (emailregex.test(correo.value)) {

	}else {
		alert('Email incorrecto');
		e.preventDefault();
	}
}

var validarPass2 = function(e){
if ((formulario.password.value.length == 0) || (formulario.password2.value.length == 0))
 {		alert('uno o mas campos de password esta vacio')
		e.preventDefault();
		
}	
}


var validar = function(e){
	validarNombre(e);
	validarApellido(e);
	validarDireccion(e);
	validarEdad(e);
	validarRatio(e);
	validarCel(e);
	validarCheckbox(e);
	validarId(e);
	validarPass(e);
	validarEmail(e);
	validarPass2(e);

	
}

 formulario.addEventListener("submit",validar)
}())

function registro() {
		var todo_correcto = true;
		var edad = document.getElementById('age')
		if(document.getElementById('name').value.length < 4 ){
		window.alert('Invalid Name')
    	todo_correcto = false;
		}
		else if (document.getElementById('lastname').value.length < 4 ){
		window.alert('Invalid Lastname')
    	todo_correcto = false;
		}
		else if (document.getElementById('address').value.length < 10 ){
			window.alert('Invalid address')
    	todo_correcto = false;

		}
		else if (isNaN(document.getElementById('age').value)){
			window.alert('Invalid age')
    	todo_correcto = false;
		}
		else if  (document.getElementById('password').value.length < 6) {
         window.alert('Invalid password')
		}

	  

}

function cell() 
{ if (isNaN(document.getElementById('cellphone').value)){
			window.alert('Invalid Cellphone')
    	todo_correcto = false;
		}

} 








	




		
    	



    		



	

