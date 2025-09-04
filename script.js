/Encuentra el primer elemento que contiene exactamente "Hello World!"
  const titulo = document.querySelector("#red");
   const decirAdios = () => {
    titulo.innerHTML = "adios";
    // titulo.style.color = "orange";
     //titulo.setAttribute("style", "color: orange;");
    titulo.style.cssText = "color: orange !important;"; //aqui cambio el color; uso
    // cssText por que una regla anterior del css bloquea al js,
    // entonces con esto cambio todo el bloque y lo "reescribo"
  }
  decirAdios()
//Aquí agrego la funcionalidad de clic
titulo.addEventListener("click", () => {//Cuando el elemento titulo sea clickeado, ejecuta esta función”.
  titulo.style.cssText = "color: brown !important;"; // cambia a marrón al hacer clic
});
