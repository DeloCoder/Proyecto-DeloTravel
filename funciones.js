function solicitudAyuda() {
    document.getElementById("solicitudAyuda").innerHTML =
      "Un agente se comunicara con Ud a la brevedad";
    console.log("ATENCION!!! El cliente solicita ayuda en la pagina");
  }
  document.getElementById("botonDeAyuda").onclick = function ()
      { solicitudAyuda();};
  