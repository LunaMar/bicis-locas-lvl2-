	

function validateForm(){

	function validarNombre(){
		
		var nombre = document.getElementById("name").value;
		if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
	  	//alert("Ingrese Nombre");
	  		var div = document.getElementById("name").parentNode;
	  		var span = document.createElement('span');
	  		var texto = document.createTextNode('ERROR: nombre incorrecto');

	  		span.appendChild(texto);
	  		div.appendChild(span);

	  	}
	
	}
	validarNombre();

	function validarApellido(){
		
		var apellido = document.getElementById("lastname").value;
		if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
	  	//alert("Ingrese Apellido");
	  		var div = document.getElementById("lastname").parentNode;
	  		var span = document.createElement('span');
	  		var texto = document.createTextNode('ERROR: apellido incorrecto');

	  		span.appendChild(texto);
	  		div.appendChild(span);
   		}
   	}
   	validarApellido();

function validarCorreo(){
		
		var correo= document.getElementById("input-email").value;
		if( correo == null || correo.length == 0 || /^\s+$/.test(correo) ) {
	  	//alert("Ingrese correo");
	  		var div = document.getElementById("input-email").parentNode;
	  		var span = document.createElement('span');
	  		var texto = document.createTextNode('ERROR: correo incorrecto');

	  		span.appendChild(texto);
	  		div.appendChild(span);
   		}
   	}
   	validarCorreo();


function validarContrasena(){
		
		var contrasena= document.getElementById("input-password").value;
		if( contrasena == null || contrasena.length == 0 || /^\s+$/.test(contrasena) ) {
	  	//alert("Ingrese contraseña");
	  		var div = document.getElementById("input-password").parentNode;
	  		var span = document.createElement('span');
	  		var texto = document.createTextNode('ERROR: contrasena incorrecto');

	  		span.appendChild(texto);
	  		div.appendChild(span);
   		}
   	}
   	validarContrasena();






	/*
	var apellido = document.getElementById("lastname").value;
	if (apellido == ""){
		alert ("Debe ingresar apellido");
		return false;
	}
	if(!soloLetras.test(apellido)){
		alert("Ingrese solo letras");                                   //valida apellido, que solo tenga letras, y que no sea espacio en blanco 
		return false; 
	}
	*/
}

