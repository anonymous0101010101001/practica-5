const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del vendedor: ", (vendedor) => {

    rl.question("Ingrese el nombre del producto: ", (producto) => {

        rl.question("Ingrese el precio del producto: $", (entradaPrecio) => {

            let precio = parseFloat(entradaPrecio);

            if (isNaN(precio) || precio <= 0) {
                console.log("Error: el precio debe ser un numero positivo.");
                rl.close();
                return;
            }

            console.log("\nCategorias:");
            console.log("A. Linea Blanca - 10% descuento");
            console.log("B. Electronica - 5% descuento");
            console.log("C. Muebleria - 15% descuento");
            console.log("D. Accesorios/Varios - 0% descuento");

            rl.question("Seleccione una categoria: ", (entradaCategoria) => {

                let categoria = entradaCategoria.trim().toUpperCase();
                let descuento = 0;
                let nombreCategoria = "";

                switch (categoria) {
                    case "A":
                        descuento = 0.10;
                        nombreCategoria = "Linea Blanca";
                        break;

                    case "B":
                        descuento = 0.05;
                        nombreCategoria = "Electronica";
                        break;

                    case "C":
                        descuento = 0.15;
                        nombreCategoria = "Muebleria";
                        break;

                    case "D":
                        descuento = 0;
                        nombreCategoria = "Accesorios/Varios";
                        break;

                    default:
                        console.log("Error: la categoria no existe.");
                        rl.close();
                        return;
                }

                rl.question("¿Desea garantia extendida? (S/N): ", (entradaGarantia) => {

                    let garantia = entradaGarantia.trim().toUpperCase();
                    let costoGarantia = 0;

                    if (garantia === "S") {
                        costoGarantia = 25;
                    } else {
                        costoGarantia = 0;
                    }

                    let montoDescuento = precio * descuento;
                    let subtotal = precio - montoDescuento;
                    let subtotalConGarantia = subtotal + costoGarantia;
                    let iva = subtotalConGarantia * 0.13;
                    let total = subtotalConGarantia + iva;
                    let totalRedondeado = Math.round(total);

                    let fecha = new Date();

                    console.log("\n==============================================");
                    console.log("              FACTURA FISCAL");
                    console.log("==============================================");
                    console.log("Fecha: " + fecha.toLocaleDateString());
                    console.log("Hora: " + fecha.toLocaleString());
                    console.log("Vendedor: " + vendedor.trim());
                    console.log("----------------------------------------------");
                    console.log("Producto: " + producto.trim());
                    console.log("Categoria: " + nombreCategoria);
                    console.log("Precio base: $" + precio.toFixed(2));
                    console.log("Descuento: $" + montoDescuento.toFixed(2));
                    console.log("Subtotal: $" + subtotal.toFixed(2));
                    console.log("Garantia extendida: $" + costoGarantia.toFixed(2));
                    console.log("Subtotal acumulado: $" + subtotalConGarantia.toFixed(2));
                    console.log("IVA (13%): $" + iva.toFixed(2));
                    console.log("----------------------------------------------");
                    console.log("TOTAL: $" + total.toFixed(2));
                    console.log("Cobro aproximado: $" + totalRedondeado);
                    console.log("==============================================");
                    console.log("Gracias por su compra.");

                    rl.close();
                });
            });
        });
    });
});
