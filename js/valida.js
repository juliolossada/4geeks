(function(){
 var formulario = document.getElementsByName('formulario')[0],
 elementos = formulario.elements,
 boton = document.getElementById('btn');

 var validarLogin = function(e){
	if ((formulario.usuario.value == 'julio') && (formulario.password.value == '123')){
		alert('Ingreso exitoso');
		location.href="contacto.html"

		
	}else
	alert('Usuario o contraseña incorrecto')
	e.preventDefault();
};

var validar = function(e){
	validarLogin(e);

	
}

 formulario.addEventListener("submit",validar)
}())





