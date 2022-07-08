

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
  const resumenDePasajeros = document.createElement("h3");
  resumenDePasajeros.innerText = "Listado de pasajeros y datos de contacto:";
  document.body.appendChild(resumenDePasajeros);}

//hago array de usuarios
let usuarios = [];
  class Usuario {
  constructor(passengerName, document, email, goDate, backDate, destination) {
    this.passengerName = passengerName;
    this.document = document;
    this.email = email;
    this.goDate = goDate;
    this.backDate = backDate;
    this.destination = destination;
  }
}

 
  //hago array de compras 
//let Compra = [];
 // class Compra 

  function registrarUsuario() {
  
  let newPassengerName = document.getElementById("passengerName").value;
  let newDocument = document.getElementById("document").value;
  let newEmail = document.getElementById("email").value;
  let newGoDate = document.getElementById("goDate").value;
  let newBackDate = document.getElementById("backDate").value;
  let newDestination = document.getElementById("destination").value;

  let pasajero = new Usuario (
      newPassengerName,
      newDocument,
      newEmail,
      newGoDate,
      newBackDate,
      newDestination);

      usuarios.push(pasajero);
      imprimirDatos(pasajero);
  
  console.log("DATOS DEL CLIENTE Nombre Pasajero: " + newPassengerName );
  console.log("Documento: " + newDocument);
  console.log("Email: " + newEmail);
  console.log("Fecha de Ida: " + newGoDate);
  console.log("Fecha de vuelta: " + newBackDate);
  console.log("Destino Seleccionado " + newDestination);
  console.log("Medio de pago: " + paymentMethod)
};
  
let weather = {
 apiKey: "56eff6cf81c370f8dff94bced718ce9d",
fetchWeather: function(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`)
  .then((response) => {
    if (!response.ok) {
      alert("No weather found.");
      throw new Error("No weather found.");
    }
    return response.json();
  })
  .then(data => console.log('DATAAAAAA',data))
  .then((data) => this.displayWeather(data)); 
},

displayWeather: function(data) {
  const {name} = data;
  const {icon, description} = data.weather [0];
  const {temp, humidity } = data.main
  const {speed } = data.wind;
  console.log(name);
  document.querySelector(".city").innerText = "El Clima en " + name;
  },

search: function () {
this.fetchWeather(document.getElementById("weather").value);

},

}
document.getElementById("weatherButton").addEventListener("click" , () =>{
  weather.search ();
} )



function comprarConBoton () {
  const comprarPasaje = document.getElementById("comprarPasaje");
  comprarPasaje.addEventListener("click", ()=> {
   
    Swal.fire({
      title: 'Esta seguro de confirmar la compra?',
      text: "Una vez aceptado, se le realizaran los cargos al medio de pago seleccionado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI, quiero confirmar la compra'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Pasaje Comprado!',
          `Su e-ticket a ${destination} esta siendo emitido`,
          'success'
        )
      }
    })  
})};



//Muestro los datos de los pax y su compra en la pagina
function imprimirDatos(pasajero) {
  const nombreParaImprimir = document.createElement("p");
  nombreParaImprimir.innerText = "Nombre: " + pasajero.name;
  document.body.appendChild(nombreParaImprimir);

  const documentoParaImprimir = document.createElement("p");
  documentoParaImprimir.innerText = "Documento: " + pasajero.document;
  document.body.appendChild(documentoParaImprimir);

  const emailParaImprimir = document.createElement("p");
  emailParaImprimir.innerText = "Email: " + pasajero.email;
  document.body.appendChild(emailParaImprimir);

  const destinoParaImprimir = document.createElement("p");
  destinoParaImprimir.innerText = "Destino Seleccionado: " + pasajero.destination;
  document.body.appendChild(destinoParaImprimir);}



  //armado del carrito
  const contenedorItems = document.getElementById('contenedorItems')
  let precioTotal = 0
  const mostrarItems = () => {
  contenedorItems.innerHTML = ""
  destinos.forEach((dest) => {
  const div = document.createElement('div')
  div.className = ('productoVisible')
  div.innerHTML =
  contenedorItems.appendChild(div)
  })
  precioTotal.innerText = carrito.reduce((acc, dest) => acc + dest.costo, 0)
  }
  
  


/*
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
comprarConBoton ();
//pasajeComprado ();