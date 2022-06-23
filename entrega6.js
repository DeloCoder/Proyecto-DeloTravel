

function solicitudAyuda() {
    document.getElementById("solicitudAyuda").innerHTML =
    "Un agente se comunicara con Ud a la brevedad";
    console.log("ATENCION!!! El cliente solicita ayuda en la pagina");
}
    document.getElementById("botonDeAyuda").onclick = function ()
    { solicitudAyuda();}

 function enviarForm () {

  const enviar = document.getElementById("enviarDatos");
  enviar.addEventListener("click", ()=> {
    Swal.fire(
      'Gracias por elegir AutoTravel!',
      'Su soliciutd ha sido enviada y confirmada, al pie de esta pagina podra confirmar la informacion de su reserva',
      'success'
    )


    registrarUsuario()} );
  
 }   


function encabezadoPagina() {
  const formulario = document.getElementById("titulo")
  const tituloPrincipal = document.createElement("h1");
  tituloPrincipal.innerText = "AUTOTRAVEL";
  formulario.appendChild(tituloPrincipal);

  const bienvenida = document.createElement("h2");
  bienvenida.innerText = "Consola Automatica de gestion de pasajes";
  document.body.appendChild(bienvenida);

  const resumenDePasajeros = document.createElement("h3");
  resumenDePasajeros.innerText = "Listado de pasajeros y datos de contacto:";
  document.body.appendChild(resumenDePasajeros);}


let usuarios = [];
  class Usuario {
  constructor(nombre, documento, email, fechaDeIda, fechaDeVuelta, destino) {
    this.nombre = nombre;
    this.documento = documento;
    this.email = email;
    this.fechaDeIda = fechaDeIda;
    this.fechaDeVuelta = fechaDeVuelta;
    this.destino = destino;
  }
}
//alert("Por favor ingrese a continuacion los datos que solicita el sistema"); Era de cuando habia q llamar con prompt y alert
 
  function registrarUsuario() {

    
  let nuevoNombre = document.getElementById("nombre").value;
  let nuevoDocumento = document.getElementById("documento").value;
  let nuevoEmail = document.getElementById("email").value;
  let nuevoFechaDeIda = document.getElementById("fechaIda").value;
  let nuevoFechaDeVuelta = document.getElementById("fechaVuelta").value;
  let nuevoDestino = document.getElementById("destino").value;


  let pasajero = new Usuario (
      nuevoNombre,
      nuevoDocumento,
      nuevoEmail,
      nuevoFechaDeIda,
      nuevoFechaDeVuelta,
      nuevoDestino);
      usuarios.push(pasajero);
      imprimirDatos(pasajero);
  
  console.log("DATOS DEL CLIENTE Nombre Pasajero: " + nuevoNombre );
  console.log("Documento: " + nuevoDocumento);
  console.log("Email: " + nuevoEmail);
  console.log("Fecha de Ida: " + nuevoFechaDeIda);
  console.log("Fecha de vuelta: " + nuevoFechaDeVuelta);
  console.log("Destino Seleccionado " + nuevoDestino);
  console.log(usuarios);

};
  

function imprimirDatos(pasajero) {
  const nombreParaImprimir = document.createElement("p");
  nombreParaImprimir.innerText = "Nombre: " + pasajero.nombre;
  document.body.appendChild(nombreParaImprimir);

  const documentoParaImprimir = document.createElement("p");
  documentoParaImprimir.innerText = "Documento: " + pasajero.documento;
  document.body.appendChild(documentoParaImprimir);

  const emailParaImprimir = document.createElement("p");
  emailParaImprimir.innerText = "Email: " + pasajero.email;
  document.body.appendChild(emailParaImprimir);

  const destinoParaImprimir = document.createElement("p");
  destinoParaImprimir.innerText = "Destino Seleccionado: " + pasajero.destino;
  document.body.appendChild(destinoParaImprimir);}



function pasajeCordoba() {
  const valorBasePasaje = 5000;
  let precioCordoba = valorBasePasaje * 1;
  alert(
    "Estimado Cliente, su pasaje a Cordoba sera emitido y enviado al Email registrado"
  );
  alert("Costo Final incluidos impuestos: " + precioCordoba + " pesos");
  console.log("Destino seleccionado: Cordoba");
  console.log("Costo final: 5.000 pesos");


document.getElementById("cordoba").onclick = function ()
    { pasajeCordoba();}}



/*function elegirDestino() {
  destinos = Number(
    prompt(`Por favor seleccione el destino deseado:
  ${1} - Cordoba
  ${2} - Mendoza
  ${3} - Santiago de Chile
  ${4} - Bogota
  ${5} - Punta Cana
  ${6} + Ayuda
  ${7} * Salir`)
  );
}
elegirDestino();*/



function pasajeMendoza() {
  const valorBasePasaje = 5000;
  let precioMendoza = valorBasePasaje * 2;
  alert(
    "Estimado Cliente, su pasaje a Mendoza sera emitido y enviado al Email registrado"
  );
  alert("Valor Total: " + precioMendoza + " pesos");
  console.log("Destino seleccionado: Mendoza");
  console.log("Costo final: 10.000 pesos");
}

function pasajeSantiagoDeChile() {
  const valorBasePasaje = 5000;
  let precioSantiagoDeChile = valorBasePasaje * 4;
  alert(
    "Estimado Cliente, su pasaje a Santiago De Chile sera emitido y enviado al Email registrado"
  );
  alert("Valor Total: " + precioSantiagoDeChile + " pesos");
  console.log("Destino seleccionado: Santiago de Chile");
  console.log("Costo final: 20.000 pesos");
}

function pasajeBogota() {
  const valorBasePasaje = 5000;
  let precioBogota = valorBasePasaje * 8;
  alert(
    "Estimado Cliente, su pasaje a Bogota sera emitido y enviado al Email registrado"
  );
  alert("Valor Total: " + precioBogota + " pesos");
  console.log("Destino seleccionado: Bogota");
  console.log("Costo final: 40.000 pesos");
}

function pasajePuntaCana() {
  const valorBasePasaje = 5000;
  let precioPuntaCana = valorBasePasaje * 10;
  alert(
    "Estimado Cliente, su pasaje a Punta Cana sera emitido y enviado al Email registrado"
  );
  alert("Valor Total: " + precioPuntaCana + " pesos");
  console.log("Destino seleccionado: Punta Cana");
  console.log("Costo final: 50.000 pesos");
}

/*switch (destinos) {
  case 1: {
    pasajeCordoba();
    break;
  }

  case 2: {
    pasajeMendoza();
    break;
  }
  case 3: {
    pasajeSantiagoDeChile();
    break;
  }
  case 4: {
    pasajeBogota();
    break;
  }
  case 5: {
    pasajePuntaCana();
    break;
  }
  case 6: {
    alert(
      "En breve un agente se contactara con Usted, para solucionar sus requerimientos. Gracias por paciencia!"
    );
    console.log(
      "ATENCION!!! Solicitud de ayuda del cliente desde el Menu 1 !!! "
    );
    break;
  }
  case 7: {
    alert("Gracias, esperamos verlo pronto otra vez, en DeloViajes");
    break;
  }
  default: {
    alert("Opcion ingresada invalida");
  }
}*/
/*function seguirComprando() {
  agregarPasaje = Number(
    prompt(` - Si Ud desea AGREGAR otro pasaje a su carrito presione ${1}.
                                
    * Si lo que Ud desea es FINALIZAR la operacion, presione ${2}.`)
  );
  switch (agregarPasaje) {
    case 1: {
      registrarUsuario();
      break;
    }

    case 2: {
      alert("Gracias, esperamos verlo muy pronto otra vez, en DeloViajes");
      break;
    }
  }
  if (agregarPasaje === 1) {
    elegirDestino();
    seguirComprando();
  } else if (agregarPasaje === 2) {
    let evaluacion = 0;
    evaluacion = prompt(
      "Seria tan amable de evaluar su experiencia con la terminal Autoservicio puntuando de 1 a 10 ? (siendo 1 muy malo, y 10 excelente)"
    );
    console.log("Calificacion de usuario recibida: " + evaluacion);

    if (evaluacion <= 4) {
      let evaluacion2 = prompt(
        "Seria tan amable indicarnos motivo de su calificacion? "
      );
      console.log(
        "!!!ATENCION!!!  Calificacion de servicio DEFICIENTE!          Reevaluar con supervisor servicio ofrecido / Motivo declarado:    " +
          evaluacion2
      );
    }
  }
  {
    alert(
      "Muchas gracias por dedicar su tiempo para valorar nuestro sistema! Que tenga una excelente jornada"
    );
  }
} 
seguirComprando();*/
encabezadoPagina();
enviarForm ();