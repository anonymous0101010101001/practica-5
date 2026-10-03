const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del huesped: ", (nombre) => {

    rl.question("Ingrese la cantidad de noches: ", (entradaNoches) => {

        let noches = parseInt(entradaNoches);

        if (isNaN(noches) || noches <= 0) {
            console.log("Error: la cantidad de noches debe ser mayor a 0.");
            rl.close();
            return;
        }

        rl.question("Ingrese la tarifa base por noche: $", (entradaTarifa) => {

            let tarifa = parseFloat(entradaTarifa);

            if (isNaN(tarifa) || tarifa <= 0) {
                console.log("Error: la tarifa debe ser mayor a $0.00.");
                rl.close();
                return;
            }

            console.log("\nTemporada de reserva:");
            console.log("1. Temporada Baja");
            console.log("2. Temporada Media - 15%");
            console.log("3. Temporada Alta - 35%");

            rl.question("Seleccione una opcion: ", (opcion) => {

                let tarifaFinal = 0;
                let temporada = "";

                switch (opcion) {
                    case "1":
                        tarifaFinal = tarifa;
                        temporada = "Temporada Baja";
                        break;

                    case "2":
                        tarifaFinal = tarifa * 1.15;
                        temporada = "Temporada Media";
                        break;

                    case "3":
                        tarifaFinal = tarifa * 1.35;
                        temporada = "Temporada Alta";
                        break;

                    default:
                        console.log("Error: la opcion seleccionada no existe.");
                        rl.close();
                        return;
                }

                let totalHospedaje = tarifaFinal * noches;
                let descuento = 0;

                if (noches >= 5) {
                    descuento = totalHospedaje * 0.10;
                } else {
                    descuento = 0;
                }

                let totalDescuento = totalHospedaje - descuento;
                let impuesto = totalDescuento * 0.05;
                let total = totalDescuento + impuesto;
                let totalRedondeado = Math.ceil(total);

                let fechaCheckOut = new Date();
                fechaCheckOut.setDate(fechaCheckOut.getDate() + noches);

                console.log("\n========== LIQUIDACION DE HOSPEDAJE ==========");
                console.log("Huesped: " + nombre.trim());
                console.log("Temporada: " + temporada);
                console.log("Noches: " + noches);
                console.log("Tarifa por noche: $" + tarifaFinal.toFixed(2));
                console.log("Total hospedaje: $" + totalHospedaje.toFixed(2));
                console.log("Descuento: $" + descuento.toFixed(2));
                console.log("Impuesto de turismo: $" + impuesto.toFixed(2));
                console.log("Total a pagar: $" + total.toFixed(2));
                console.log("Total redondeado: $" + totalRedondeado);
                console.log("Check-out: " + fechaCheckOut.toLocaleDateString());
                console.log("===============================================");

                rl.close();
            });
        });
    });
});
