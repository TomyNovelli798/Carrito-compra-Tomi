import { actualizarTotalesCarrito } from "./actualizarCarrito.js";
import { productos } from "./almacenamiento.js";

let carrito = [];

const validarProductoCarrito = (productoId) => {
    const productoRepetido = carrito.find(producto => producto.id === productoId);

    if (productoRepetido) {
        productoRepetido.cantidad++;
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `Cantidad: ${productoRepetido.cantidad}`
        actualizarTotalesCarrito(carrito);
    } else {
        agregarAlCarrito(productoId);
    }
};

const agregarAlCarrito = (productoId) => {
    const contenedor = document.getElementById('carrito-contenedor');
    const producto = productos.find(producto => producto.id === productoId);
    carrito.push(producto);

    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                    <button id=eliminar${producto.id} class='btn waves-effect waves-ligth boton-eliminar' value='${producto.id}'>X</button>
    `;
    contenedor.appendChild(div);
    actualizarTotalesCarrito(carrito);
};

const pintarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor');

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                        <button id=eliminar${producto.id} class='btn waves-effect waves-ligth boton-eliminar' value='${producto.id}'>X</button>
        `;
        contenedor.appendChild(div);
    });
};
export { validarProductoCarrito, pintarCarrito };