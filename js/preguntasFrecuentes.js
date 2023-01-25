
const preguntas = document.querySelectorAll('.contenedorPreguntas .unaPreg');

preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activa');

		const respuesta = pregunta.querySelector('.rta');
		const alturaRealRespuesta = respuesta.scrollHeight;
		
		if(!respuesta.style.maxHeight){
			// Si esta vacio el maxHeight entonces ponemos un valor.
			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			respuesta.style.maxHeight = null;
		}

		// Reiniciamos las demas preguntas
		preguntas.forEach((elemento) => {
			// Solamente queremos ejecutar el codigo para las preguntas que no 
			// sean la pregunta a la que le dimos click.
			if(pregunta !== elemento){
				elemento.classList.remove('activa');
				elemento.querySelector('.rta').style.maxHeight = null;
			}
		});


	});
});