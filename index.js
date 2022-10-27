
import { mostrarProductos } from "./app.js";
import { actualizarTotalesCarrito } from "./src/actualizarCarrito.js";
import { productos } from "./src/stock.js";
import { obtenerCarritoStorage } from "./src/almacenamiento.js";
import { pintarCarrito } from "./src/accionesCarrito.js";

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);

    if (localStorage.getItem('carrito')) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    };
});