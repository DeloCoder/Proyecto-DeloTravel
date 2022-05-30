const usuarios = [];
do {
  class Usuario {
    constructor(nombre, documento, email, fechaDeIda, fechaDeVuelta) {
      this.nombre = nombre;
      this.documento = documento;
      this.email = email;
      this.fechaDeIda = fechaDeIda;
      this.fechaDeVuelta = fechaDeVuelta;
      this.destino = 0; /*por que si no pongo cero aca no funca?*/
    }
  }

  {
    datosUsuario = alert(
      "Bienvenido a nuestra terminal Autoservicio! Por favor ingrese a continuacion los datos que solicita el sistema"
    );
    alert(
      "Si necesita asistencia, en el menu de destinos, elija la OPCION 6 y un agente se comunicara con Ud"
    );
  }

  registrarUsuario();
  function registrarUsuario() {
    let nombre = prompt("Nombre Completo:");
    let documento = Number(prompt("Documento: "));
    let email = prompt("Email: ");
    let fechaDeIda = prompt("Fecha de ida solicitada  ingrese Dia/mes/año");
    let fechaDeVuelta = prompt(
      "Fecha de Vuelta solicitada  ingrese Dia/mes/año"
    );
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
  }

  elegirDestino();
  function elegirDestino() {
    destinos = Number(
      prompt(`Por favor, seleccione un destino:
                              
                              1. Cordoba
                              2. Mendoza
                              3. Santiago de Chile
                              4. Bogota
                              5. Punta Cana
                              6. Ayuda
                              7. Salir`)
    );
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
        "En breve un agente se contactara con Usted, para solucionar sus requerimientos. Gracias por su Colaboracion y paciencia!"
      );
      console.log("ATENCION!!! Requerimiento de contacto del cliente!!! ");
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

  function pasajeCordoba() {
    const valorBasePasaje = 5000;
    let precioCordoba = valorBasePasaje * 1;
    alert(
      "Estimado Cliente su pasaje a Cordoba sera emitido y enviado al Email registrado"
    );
    alert("Costo Final incluidos impuestos: " + precioCordoba + " pesos");
    console.log("Destino seleccionado: Cordoba");
    console.log("Costo final: 5.000 pesos");
  }

  function pasajeMendoza() {
    const valorBasePasaje = 5000;
    let precioMendoza = valorBasePasaje * 2;
    alert("Su pasaje a Mendoza sera emitido y enviado al Email registrado");
    alert("Valor Total: " + precioMendoza + " pesos");
    console.log("Destino seleccionado: Mendoza");
    console.log("Costo final: 10.000 pesos");
  }

  function pasajeSantiagoDeChile() {
    const valorBasePasaje = 5000;
    let precioSantiagoDeChile = valorBasePasaje * 4;
    alert(
      "Su pasaje a Santiago De Chile sera emitido y enviado al Email registrado"
    );
    alert("Valor Total: " + precioSantiagoDeChile + " pesos");
    console.log("Destino seleccionado: Santiago de Chile");
    console.log("Costo final: 20.000 pesos");
  }

  function pasajeBogota() {
    const valorBasePasaje = 5000;
    let precioBogota = valorBasePasaje * 8;
    alert("Su pasaje a Bogota sera emitido y enviado al Email registrado");
    alert("Valor Total: " + precioBogota + " pesos");
    console.log("Destino seleccionado: Bogota");
    console.log("Costo final: 40.000 pesos");
  }

  function pasajePuntaCana() {
    const valorBasePasaje = 5000;
    let precioPuntaCana = valorBasePasaje * 10;
    alert("Su pasaje a Punta Cana sera emitido y enviado al Email registrado");
    alert("Valor Total: " + precioPuntaCana + " pesos");
    console.log("Destino seleccionado: Punta Cana");
    console.log("Costo final: 50.000 pesos");
  }

  seguirComprando();
  function seguirComprando() {
    comprar = Number(
      prompt(`Si Ud desea AGREGAR otro pasaje a su carrito presione 1.
                                
    Si lo que Ud desea es FINALIZAR la operacion, presione 2.
                                
    Para solicitar ASISTENCIA, presione 3.`)
    );
  }

  switch (comprar) {
    case 1: {
      registrarUsuario();
      break;
    }

    case 2: {
      alert("Gracias, esperamos verlo pronto otra vez, en DeloViajes");
      break;
    }

    case 3: {
      alert(
        "En breve un agente se contactara con Usted, para solucionar sus requerimientos. Gracias por su Colaboracion y paciencia!"
      );
      console.log("ATENCION!!! Requerimiento de contacto del cliente!!! ");
      break;
    }
  }

  while (comprar > 2);
} while ((evaluacion = 0));
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

{
  alert(
    "Muchas gracias por dedicar su tiempo para valorar nuestro sistema! Que tenga una excelente jornada"
  );
}
