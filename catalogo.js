
document.addEventListener("DOMContentLoaded", function() {
  

  alert("¡Atencion, vas a entrar al mejor mercado de camisetas de Argentina, si no queres gastar plata ni entres!");

  


// Función para agregar un artículo al carrito
function agregarAlCarrito(nombre, precio) {
  // Obtener el carrito actual desde el LocalStorage
  var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Agregar el artículo al carrito
  carrito.push({ nombre, precio });

  // Actualizar el LocalStorage con el carrito actualizado
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // Actualizar la visualización del carrito
  mostrarCarrito();
}

   
// Función para mostrar el carrito en la página
function mostrarCarrito() {
  var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  var listaCarrito = document.getElementById('items-carrito');
  var totalCarrito = document.getElementById('total-carrito');
  var total = 0;

  // Limpiar el carrito anterior
  listaCarrito.innerHTML = '';

  // Mostrar los elementos del carrito
  carrito.forEach(function (item) {
      var nuevoElemento = document.createElement('li');
      nuevoElemento.textContent = item.nombre + ' - $' + item.precio.toFixed(2);
      listaCarrito.appendChild(nuevoElemento);
      total += item.precio;
  });

  // Mostrar el total
  totalCarrito.textContent = total.toFixed(2);
}

// Función para vaciar el carrito
function vaciarCarrito() {
  localStorage.removeItem('carrito');
  mostrarCarrito();
}

// Llamar a mostrarCarrito al cargar la página
mostrarCarrito();






const catalogo = [
  {
    imagen: "../images/francia.jpg",
    nombre: "Camiseta Francia 2018",
    precio: "13,999$"
  },
  {
    imagen: "../images/seleccion.jpg",
    nombre: "Camiseta Selección Argentina 2014",
    precio: "13,999$"
  },
  {
    imagen: "../images/camiseta-de-boca.jpg",
    nombre: "Camiseta Boca Juniors Temporada 2011",
    precio: "13,999$"
  }
  // Puedes agregar más objetos aquí para más camisetas
];



 // Llama a la función para mostrar el catálogo al cargar la página
window.onload = mostrarCatalogo;

// Evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Resto de tu código aquí
});

// Función de orden superior para filtrar camisetas por precio
const filtrarPorPrecio = (camisetas, precioMaximo) => {
  return camisetas.filter(camiseta => camiseta.precio <= precioMaximo);
};

function calcularTiempoEnvio(dias) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`El envío llegará en ${dias} días`);
    }, 2000);
  });
}

const appDiv = document.getElementById("app");

calcularTiempoEnvio(3).then(mensaje => {
  appDiv.innerHTML = `<p>${mensaje}</p>`;
})

    // Obtener una referencia al botón de comprar
    var comprarBtn = document.getElementById("comprarBtn");

    // Agregar un evento clic al botón de comprar
    comprarBtn.addEventListener("click", function() {
        alert('¡Gracias por comprar la camiseta!');
    })

// Obtener una referencia al botón
var cambiarTemaBtn = document.getElementById("cambiarTema");

// Función para cambiar el tema a oscuro
function cambiarTemaOscuro() {
    // Agregar una clase al body para aplicar los estilos del modo oscuro
    document.body.classList.add("modo-oscuro");
}

// Agregar un evento clic al botón
cambiarTemaBtn.addEventListener("click", cambiarTemaOscuro);





// Obtener una referencia al botón
var cambiarColorButton = document.getElementById("cambiarColor");

// Obtener una referencia al elemento que cambiará de color
var cambiarFondoDiv = document.getElementById("cambiarFondoDiv");

// Función para cambiar el color de fondo
function cambiarColorDeFondo() {
    cambiarFondoDiv.style.backgroundColor = "lightblue";
}

// Agregar un evento clic al botón
cambiarColorButton.addEventListener("click", cambiarColorDeFondo);


});




function calcularTotal() {
  // Obtener la cantidad ingresada por el usuario
  const cantidad = parseInt(document.getElementById('cantidad').value);
  
  // Calcular el total
  const precioPorCamiseta = 13.999;
  const total = cantidad * precioPorCamiseta;
  
  // Mostrar el totyal
  document.getElementById('total').textContent = total;
  
  // Mostrar un mensaje de confirmación
  const mensaje = `Has seleccionado ${cantidad} camisetas. Total a pagar: $${total}`;
  document.getElementById('mensaje').textContent = mensaje;
}



  // Función para agregar un artículo al carrito
  function agregarAlCarrito(nombre, precio) {
    // Puedes implementar aquí la lógica para agregar el producto al carrito
    // Por ejemplo, actualizar el LocalStorage o mostrar un mensaje al usuario
    alert(`Agregaste "${nombre}" al carrito por $${precio}`);
}


