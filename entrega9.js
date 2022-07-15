

function getHelp() {
    document.getElementById("getHelp").innerHTML =
    "Un agente se comunicara con Ud a la brevedad";
    console.log("ATENCION!!! El cliente solicita ayuda en la pagina");
}
    document.getElementById("helpButton").onclick = function ()
    { getHelp();}


function sendForm () {
    const send = document.getElementById("sendData");
    send.addEventListener("click", ()=> {
      Swal.fire({
        title: 'Esta seguro de confirmar la compra?',
        text: `Una vez aceptado, se le realizaran los cargos a su medio de pago seleccionado`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI, confirmo'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Pasaje Comprado!',
            `Su e-ticket a ${newDestination} esta siendo emitido`,
            'success'
          )
          
        }
      })  
    userRegistration()} );
}   


function webHeader() {
  const form = document.getElementById("titulo")
  const mainTitle = document.createElement("h1");
  mainTitle.innerText = "AUTOTRAVEL";
  form.appendChild(mainTitle);
  const passengerList = document.createElement("h3");
  passengerList.innerText = "Listado de pasajes emitidos y datos de contacto:";
  document.body.appendChild(passengerList);}

let users;
if (localStorage.getItem(`users`) != null) {
  users = JSON.parse(localStorage.getItem("users"));
} else  {users = []  
}

//hago array de usuarios

  class User {
  constructor(passengerName, document, dateOfBirth, email, telephone, goDate, backDate, destination, paymentMethod, cardNumber) {
    this.passengerName = passengerName;
    this.document = document;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
    this.telephone = telephone;
    this.goDate = goDate;
    this.backDate = backDate;
    this.destination = destination;
    this.paymentMethod = paymentMethod;
    this.cardNumber = cardNumber;
    //array de pasaje comprado, falta agregar function para q cuando uso boton me meta aca los pasajes comprados,
    this.buyedTickets = [];
  }  
};


function userRegistration() {
  let newPassengerName = document.getElementById("passengerName").value;
  let newDocument = document.getElementById("document").value;
  let newDateOfBirth= document.getElementById("dateOfBirth").value;
  let newEmail = document.getElementById("email").value;
  let newTelephone = document.getElementById("telephone").value;
  let newGoDate = document.getElementById("goDate").value;
  let newBackDate = document.getElementById("backDate").value;
  let newDestination = document.getElementById("destination").value;
  let newPaymentMethod = document.getElementById("paymentMethod").value;
  let newCardNumber = document.getElementById("cardNumber").value;

  let passenger = new User (
      newPassengerName,
      newDocument,
      newDateOfBirth,
      newEmail,
      newTelephone,
      newGoDate,
      newBackDate,
      newDestination,
      newPaymentMethod,
      newCardNumber);
      users.push(passenger);

      //a traves de JSON.stringyfi transformo los datosa e string y lo meto al Local Storage
      localStorage.setItem(`users`, JSON.stringify(users));
      printData(passenger);
  
      console.log("--DATOS DEL PASAJERO--")
      console.log("Nombre Pasajero: " + newPassengerName );
      console.log("Documento: " + newDocument);
      console.log("Email: " + newEmail);
      console.log("Telefono: " + newTelephone);
      console.log("Fecha de Ida: " + newGoDate);
      console.log("Fecha de vuelta: " + newBackDate);
      console.log("Destino Seleccionado " + newDestination);
      console.log("Medio de pago seleccionado: " + newPaymentMethod);
      console.log("+++++++++++++++++++++++++++++++");
};
const newDestination = document.getElementById("destination").value;

//Utilizo una API para consumir datos sobre clima mundial, donde el pasajero puede elegir cualquier ciudad del mundo 
let weather = {
 apiKey: "56eff6cf81c370f8dff94bced718ce9d",
  fetchWeather: function(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=es`)
  
    .then((response) => response.json())
  
    .then((data) => this.displayWeather(data))
  
    .catch((error)=> {
      swal.fire({
        icon:"error",
        position:"center",
        title:`Error: ${error}`,
      });
  })
},

 //Deconstruyo los datos de la API para mostrar solo los q quiero en pantalla de entre todo el catalogo de la API
  displayWeather: function(data) {
  const {name} = data;
  const {icon, description} = data.weather[0];
  const {temp, humidity } = data.main;
  const {speed } = data.wind;
  document.querySelector(".city").innerText = "El Clima en " + name;
  document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = temp + "°C"; 
  document.querySelector(".humidity").innerText = "Humedad: " + humidity + "%";
  document.querySelector(".wind").innerText = "Viento: " + speed + "Km/h";
  },

    search: function () {
    this.fetchWeather(document.getElementById("weather").value);
  },
}
  document.getElementById("weatherButton").addEventListener("click" , () =>{
  weather.search ();
})


//Muestro los datos de los pax y su compra en la pagina, separado x pasajero, a modo de respuesta 
function printData(passenger) {
 //genero DIV para  meter en box los datos de pax 
  const containerData = document.createElement("div");
  containerData.setAttribute("class", "registerForm");
  document.body.appendChild(containerData);
 //Agrego con AppendChild diferentes datos a ese box 
  const nameToPrint = document.createElement("p");
  nameToPrint.innerText = "Nombre: " + passenger.passengerName;
  containerData.appendChild(nameToPrint);
  const documentToPrint = document.createElement("p");
  documentToPrint.innerText = "Documento: " + passenger.document;
  containerData.appendChild(documentToPrint);
  const emailToPrint = document.createElement("p");
  emailToPrint.innerText = "Email: " + passenger.email;
  containerData.appendChild(emailToPrint);
  const telephoneToPrint = document.createElement("p");
  telephoneToPrint.innerText = "Telefono: " + passenger.telephone;
  containerData.appendChild(telephoneToPrint);
  const destinatioToPrint = document.createElement("p");
  destinatioToPrint.innerText = "Destino Seleccionado: " + passenger.destination;
  containerData.appendChild(destinatioToPrint);}



  //Armado del carrito
  /*const contenedorItems = document.getElementById('contenedorItems')
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
  }*/
  

/*function pasajeCordoba() {
  const valorBasePasaje = 5000;
  let precioCordoba = valorBasePasaje * 1;
  alert(
    "Estimado Cliente, su pasaje a Cordoba sera emitido y enviado al Email registrado"
  );
  alert("Costo Final incluidos impuestos: " + precioCordoba + " pesos");
  
  

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
seguirComprando();*/


webHeader();
sendForm ();

