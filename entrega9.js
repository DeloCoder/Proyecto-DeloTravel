//hago array de usuarios
let usuarios = [];

//hago array de compras 
let compras = [];




function solicitudAyuda() {
    document.getElementById("solicitudAyuda").innerHTML =
    "Un agente se comunicara con Ud a la brevedad";
    console.log("ATENCION!!! El cliente solicita ayuda en la pagina");
}
    document.getElementById("botonDeAyuda").onclick = function ()
    { solicitudAyuda();}

//boton registrar usuario
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

//boton compras
function enviarCompra () {
    const enviar = document.getElementById("botonAgregar");
    enviar.addEventListener("click",() => {
            Swal.fire({
                icon: "success",
                title: "Su compra esta confirmada. El costo de la misma se cargara a su tarjeta",
                
            });
            comprarPasaje();
        });
     //setTimeout(()=>{comprarPasaje(),3000});

    }   

function encabezadoPagina() {
  const formulario = document.getElementById("titulo")
  const tituloPrincipal = document.createElement("h1");
  tituloPrincipal.innerText = "AUTOTRAVEL";
  formulario.appendChild(tituloPrincipal);
  const resumenDePasajeros = document.createElement("h3");
  resumenDePasajeros.innerText = "Listado de pasajeros y datos de contacto:";
  document.body.appendChild(resumenDePasajeros);}


  class Usuario {
  constructor(nombre, documento, email) {
    this.nombre = nombre;
    this.documento = documento;
    this.email = email;
    
  }
}


  class Pasaje {
   constructor(fechaDeIda, fechaDeVuelta, destino) {
     this.fechaDeIda = fechaDeIda;
     this.fechaDeVuelta = fechaDeVuelta;
     this.destino = destino;
   }
 }

function registrarUsuario() {
   
  let nuevoNombre = document.getElementById("nombre").value;
  let nuevoDocumento = document.getElementById("documento").value;
  let nuevoEmail = document.getElementById("email").value;
let pasajero = new Usuario (
      nuevoNombre,
      nuevoDocumento,
      nuevoEmail,
      );
      usuarios.push(pasajero);
      imprimirPasajero(pasajero);
  console.log("DATOS DEL CLIENTE Nombre Pasajero: " + nuevoNombre );
  console.log("Documento: " + nuevoDocumento);
  console.log("Email: " + nuevoEmail);  
}
  

function comprarPasaje () {

  let nuevoFechaDeIda = document.getElementById("fechaIda").value;
  let nuevoFechaDeVuelta = document.getElementById("fechaVuelta").value;
  let nuevoDestino = document.getElementById("destino").value;
let pasaje = new Pasaje (
    nuevoFechaDeIda,
    nuevoFechaDeVuelta,
    nuevoDestino
    );
    compras.push(pasaje);
    imprimirPasaje(pasaje);
  console.log("Fecha de Ida: " + nuevoFechaDeIda);
  console.log("Fecha de vuelta: " + nuevoFechaDeVuelta);
  console.log("Destino Seleccionado " + nuevoDestino);
}



function imprimirPasajero(pasajero) {
  const nombreParaImprimir = document.createElement("p");
  nombreParaImprimir.innerText = "Nombre: " + pasajero.nombre;
  document.body.appendChild(nombreParaImprimir);

  const documentoParaImprimir = document.createElement("p");
  documentoParaImprimir.innerText = "Documento: " + pasajero.documento;
  document.body.appendChild(documentoParaImprimir);

  const emailParaImprimir = document.createElement("p");
  emailParaImprimir.innerText = "Email: " + pasajero.email;
  document.body.appendChild(emailParaImprimir);
}

  function imprimirPasaje(pasaje) {
    const destinoParaImprimir = document.createElement("p");
    destinoParaImprimir.innerText = "Destino Seleccionado: " + pasaje.destino;
    document.body.appendChild(destinoParaImprimir);
}




  //armado del carrito
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
  console.log("Destino seleccionado: Cordoba");
  console.log("Costo final: 5.000 pesos");


document.getElementById("cordoba").onclick = function ()
    { pasajeCordoba();}}



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
}*/


encabezadoPagina();
enviarForm ();
enviarCompra();