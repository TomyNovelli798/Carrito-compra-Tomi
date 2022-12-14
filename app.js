//Swal.fire('Este es un modal con sweetalert');
const btn = document.getElementById('btn-comprar');

btn.addEventListener('click', () => {
    Swal.fire({
    icon: 'success',
        title: 'Felicidades',
        text: 'Su compra ha sido realizada con éxito!'
    })
});

import { validarProductoCarrito } from "./src/accionesCarrito.js";

const mostrarProductos = (productos) => {
const contenedorProductos = document.getElementById("producto-contenedor");

contenedorProductos.innerHTML = '';

productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.img}>
                        <span class="card-title">${producto.nombre}</span>
                        <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                    </div>
                    <div class="card-content">
                        <p>${producto.desc}</p>
                        <p>${producto.precio}</p>
                    </div>`
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
    validarProductoCarrito(producto.id)
    });
});
};

export { mostrarProductos};