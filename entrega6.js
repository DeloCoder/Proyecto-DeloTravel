function solicitudAyuda() {
  document.getElementById("solicitudAyuda").innerHTML =
    "Un agente se comunicara con Ud a la brevedad";
  console.log("ATENCION!!! El cliente solicita ayuda en la pagina");
}
document.getElementById("botonDeAyuda").onclick = function () {
  solicitudAyuda();
};

function startApp() {
  encabezadoPagina();
}
startApp();
function encabezadoPagina() {
  const tituloPrincipal = document.createElement("h1");
  tituloPrincipal.innerText = "AutoTravel";
  document.body.appendChild(tituloPrincipal);

  const bienvenida = document.createElement("h2");
  bienvenida.innerText = "Consola de Automatica de gestion de pasajes";
  document.body.appendChild(bienvenida);

  const resumenDePasajeros = document.createElement("h3");
  resumenDePasajeros.innerText = "Listado de pasajeros y datos de contacto:";
  document.body.appendChild(resumenDePasajeros);
}

function enviarFormulario()
let document.getElementById("enviarDatos").onclick = function () {

};
enviarFormulario();



let usuarios = [];
class Usuario {
  constructor(nombre, documento, email, fechaDeIda, fechaDeVuelta) {
    this.nombre = nombre;
    this.documento = documento;
    this.email = email;
    this.fechaDeIda = fechaDeIda;
    this.fechaDeVuelta = fechaDeVuelta;
    this.destino = 0;
  }
}

alert("Por favor ingrese a continuacion los datos que solicita el sistema");

function registrarUsuario() {
  let nombre = prompt("Nombre Completo:");
  let documento = Number(prompt("Documento: "));
  let email = prompt("Email: ");
  let fechaDeIda = prompt("Fecha de ida solicitada  ingrese Dia/mes/año");
  let fechaDeVuelta = prompt("Fecha de Vuelta solicitada  ingrese Dia/mes/año");
  let usuario = new Usuario(
    nombre,
    documento,
    email,
    fechaDeIda,
    fechaDeVuelta
  );

  usuarios.push(usuario);
  console.log("DATOS DEL CLIENTE Nombre Pasajero: " + nombre);
  console.log("Documento: " + documento);
  console.log("Email: " + email);
  console.log("Fecha de Ida: " + fechaDeIda);
  console.log("Fecha de vuelta: " + fechaDeVuelta);
  console.log(usuarios);

  function imprimirDatos() {
    const nombreParaImprimir = document.createElement("p");
    nombreParaImprimir.innerText = "Nombre: " + nombre;
    document.body.appendChild(nombreParaImprimir);

    const documentoParaImprimir = document.createElement("p");
    documentoParaImprimir.innerText = "Documento: " + documento;
    document.body.appendChild(documentoParaImprimir);

    const emailParaImprimir = document.createElement("p");
    emailParaImprimir.innerText = "Email: " + email;
    document.body.appendChild(emailParaImprimir);
  }

  imprimirDatos();
}

registrarUsuario();

function elegirDestino() {
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
elegirDestino();

function imprimirDestinos() {
  const destinoParaImprimir = document.createElement("p");
  destinoParaImprimir.innerText = "Destino Seleccionado: " + destinos;
  document.body.appendChild(destinoParaImprimir);
}
imprimirDestinos();

function pasajeCordoba() {
  const valorBasePasaje = 5000;
  let precioCordoba = valorBasePasaje * 1;
  alert(
    "Estimado Cliente, su pasaje a Cordoba sera emitido y enviado al Email registrado"
  );
  alert("Costo Final incluidos impuestos: " + precioCordoba + " pesos");
  console.log("Destino seleccionado: Cordoba");
  console.log("Costo final: 5.000 pesos");
}

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

switch (destinos) {
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
}
function seguirComprando() {
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
seguirComprando();
