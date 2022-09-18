// const productos = [
//     {
//     nombre: "Relojes",
//     precio: 50000,
//     },
//     {
//     nombre: "Collares",
//     precio: 3000,
//     },
//     {
//     nombre: "Anillos",
//     precio: 3500,
//     },
//     {
//     nombre: "Lentes",
//     precio: 30000,
//     },
//     {
//     nombre: "Aritos",
//     precio: 2800,
//     },
// ];

// let carrito = [];

// let seleccion = prompt("Hola!! desea comprar algo? si o no");

// while (seleccion != "si" && seleccion != "no") {
//     alert("Por favor ingresar si o no");
//     seleccion = prompt("Hola!! desea comprar algo? si o no");
// }

// if (seleccion == "si") {
//     alert("a continuacion la lista de productos");
//     let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
//     alert(todosLosProductos.join(" - "));
// } else if (seleccion == "no") {
//     alert("gracias por venir!!");
// }

// while (seleccion != "no") {
//     let producto = prompt("agrega un producto a tu carrito");
//     let precio = 0;

//     if (
//     producto == "Relojes" ||
//     producto == "Collares" ||
//     producto == "Anillos" ||
//     producto == "Lentes" ||
//     producto == "Aritos"
//     ) {
//     switch (producto) {
//         case "Relojes":
//         precio = 50;
//         break;
//         case "Collares":
//         precio = 100;
//         break;
//         case "Anillos":
//         precio = 150;
//         break;
//         case "Lentes":
//         precio = 400;
//         break;
//         case "Aritos":
//         precio = 500;
//         break;
//         default:
//         break;
//     }
//     let unidades = parseInt(prompt("cuantas unidades de ese producto queres llevar"));
//     carrito.push({ producto, unidades, precio });
//     } else {
//     alert("no tenemos ese producto");
//     }

//     seleccion = prompt("queres seguir comprando si o no");

//     while (seleccion == "no") {
//     alert("gracias por la compra!");

//     carrito.forEach((carritoFinal) => {
//         console.log(
//         `producto ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto: 
//         ${carritoFinal.unidades * carritoFinal.precio}`);
//     });
//     break;
//     }
// }
//     const total = carrito.reduce((acc, item) => acc + item.precio * el.unidades, 0);
// console.log(`el total a pagar por su compra es de: ${total}`);