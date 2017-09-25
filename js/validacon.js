(function(){
 var formulario = document.getElementsByName('formulario')[0],
 elementos = formulario.elements,
 boton = document.getElementById('btn');

 var validarUser = function(e){
	if (formulario.name.value == 0){
		alert('Ingrese un nombre valido');
		e.preventDefault();
	}
	
	};
	var validarText = function(e){
	if (formulario.campo.value == 0){
		alert('El campo de texto esta vacio');
		e.preventDefault();
	}
	
	};

	var validarEmail = function(e){
	correo = document.getElementById('email')
	emailregex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if (emailregex.test(correo.value)) {

	}else {
		alert('Email incorrecto');
		e.preventDefault();
	}
}



var validar = function(e){
	validarUser(e);
	validarText(e);
	validarEmail(e);

	
}

 formulario.addEventListener("submit",validar)
}())



