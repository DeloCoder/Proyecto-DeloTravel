
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
        confirmButtonText: 'SI!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Pasaje Comprado!',
            `Su e-ticket esta siendo emitido, reviselo mas abajo por favor`,
            'success'
          )
          
        }
      })  
    userRegistration()} );
}   



//this makes appear tittles etc on the web
function pageHeader() {
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
};
let tickets;
    if (localStorage.getItem(`tickets`) != null) {
    tickets = JSON.parse(localStorage.getItem("tickets"));
    } else  {tickets = []  
};


let airTicket = [
  {city: `Cordoba`, price: 10000, region: `south america`},
  {city: `Mendoza`, price: 12000, region: `south america`},
  {city: `Tucuman`, price: 12000, region: `south america`},
  {city: `Neuquen`, price: 13000, region: `south america`},
  {city: `Rio Gallegos`, price: 15000, region: `south america`},
  {city: `El Calafate`, price: 17000, region: `south america`},
  {city: `Ushuaia`, price: 19000, region: `south america`},
  {city: `Cataratas del Iguazu`, price: 19000, region: `south america`},
  {city: `Santiago de Chile`, price: 35000, region: `south america`},
  {city: `Rio de Janeiro`, price: 38000, region: `south america`},
  {city: `San Pablo`, price: 38000, region: `south america`},
  {city: `Bogota`, price: 45000, region: `south america`},
  {city: `Punta Cana`, price: 49000, region: `Caribbean`},
  {city: `Cancun`, price: 49000, region: `Caribbean`},
  {city: `Miami`, price: 60000, region: `North america`},
  {city: `New York`, price: 70000, region: `North america`},
  {city: `Madrid`, price: 110000, region: `Europe`},
  {city: `Roma`, price: 130000, region: `Europe`},
];

 


//This section simulates the application of Iva (tax) to the original price
  const airTicketIva = airTicket.map(item => {
  let newAirTicketPrice = item.price + item.price*1.21
//this line changes the price + iva in a new object (newAirTicketPrice) so the original objects of the tickets array doesn't change
  return {...item, price: newAirTicketPrice}
  
})

//This creates User Array, with registration information + destination information and payment method. 
class User {
  constructor(passengerName, document, dateOfBirth, email, telephone) {
    this.passengerName = passengerName;
    this.document = document;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
    this.telephone = telephone}
};

class Ticket {
  constructor (passengerName, goDate, backDate, destination, paymentMethod, cardNumber) {
    this.passengerName = passengerName;
    this.goDate = goDate;
    this.backDate = backDate;
    this.destination = destination
    this.paymentMethod = paymentMethod;
    this.cardNumber = cardNumber}  
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
      newTelephone);
      users.push(passenger);

  let soldTicket = new Ticket (
      newPassengerName,
      newGoDate,
      newBackDate,
      newDestination,
      newPaymentMethod,
      newCardNumber);
      tickets.push(soldTicket);
      shoppingCart.push(soldTicket);


      //Using JSON.strin gify i transform data into string and add it to the LS
      localStorage.setItem(`users`, JSON.stringify(users));
      localStorage.setItem(`tickets`, JSON.stringify(tickets));
      
      printData(passenger);
      printTicket(soldTicket);
      console.log("++DATOS DEL PASAJERO++")
      console.log("Nombre Pasajero: " + newPassengerName );
      console.log("Documento: " + newDocument);
      console.log("Email: " + newEmail);
      console.log("Telefono: " + newTelephone);
      console.log("Fecha de Ida: " + newGoDate);
      console.log("Fecha de vuelta: " + newBackDate);
      console.log("Destino Seleccionado " + newDestination);
      console.log("Medio de pago seleccionado: " + newPaymentMethod);
      console.log("-=-=-=-=-=-=-=-=-=-=-=- END =-=-=-=-=-=-=-=-=-=-=-=-=-");
};

let shoppingCart = [];
console.log(shoppingCart);


//Using a free API to get world wide weather 
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

 //Deconstructinh API several data to show some of it
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


//showing passenger and ticket info on the web
function printData(passenger) {
 //generating a DIV to add data 
  const containerData = document.createElement("div");
  containerData.setAttribute("class", "registerForm");
  document.body.appendChild(containerData);
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
};

  function printTicket(soldTicket) {
    const ticketData = document.createElement("div");
    ticketData.setAttribute("class", "dataForm");
    document.body.appendChild(ticketData);
    const destinationToPrint = document.createElement("p");
    destinationToPrint.innerText = "Destino Seleccionado: " + soldTicket.destination;
    ticketData.appendChild(destinationToPrint);
    const dateToGoToPrint = document.createElement("p");
    dateToGoToPrint.innerText = "Fecha de Ida Seleccionada: " + soldTicket.goDate;
    ticketData.appendChild(dateToGoToPrint);
    const dateBackToPrint = document.createElement("p");
    dateBackToPrint.innerText = "Fecha de Vuelta Seleccionada: " + soldTicket.backDate;
    ticketData.appendChild(dateBackToPrint);
  }


  
pageHeader();
sendForm ();


