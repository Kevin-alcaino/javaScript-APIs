// 1. Capturamos los elementos del HTML mediante sus ID
const selectMoneda = document.querySelector("#select-moneda");
const inputMonto = document.querySelector("#monto");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");

// 2. Función asíncrona para cargar las monedas desde el archivo JSON
async function obtenerMonedas() {
    try {
        const res = await fetch("mindicador.json");
        const data = await res.json();

        // Recorremos el objeto JSON para llenar el select
        for (const clave in data) {
            const item = data[clave];
            
            // Validamos que sea un indicador económico válido
            if (item && typeof item === "object" && item.codigo && item.valor) {
                const option = document.createElement("option");
                option.value = item.codigo;
                option.textContent = item.nombre;
                
                // Guardamos el valor numérico en un atributo 'dataset' de la opción
                option.dataset.valor = item.valor;

                selectMoneda.appendChild(option);
            }
        }
    } catch (error) {
        resultado.textContent = "Error al cargar las monedas.";
        console.error(error);
    }
}

// Ejecutamos la función de carga al iniciar la página
obtenerMonedas();

// 3. Escuchamos el evento click del botón para realizar la conversión
boton.addEventListener("click", () => {
    const montoCLP = Number(inputMonto.value);
    
    // Obtenemos la opción que el usuario seleccionó en el <select>
    const indexSeleccionado = selectMoneda.selectedIndex;
    const opcionSeleccionada = selectMoneda.options[indexSeleccionado];
    const valorMoneda = Number(opcionSeleccionada.dataset.valor);

    // Validaciones básicas por si el usuario no ingresa datos
    if (!montoCLP || isNaN(montoCLP)) {
        resultado.textContent = "Por favor, ingresa un monto válido en pesos.";
        return;
    }

    if (!valorMoneda) {
        resultado.textContent = "Por favor, selecciona una moneda.";
        return;
    }

    // Realizamos el cálculo (Pesos chilenos divididos por el valor de la moneda extranjera)
    const total = montoCLP / valorMoneda;

    // Mostramos el resultado en el DOM formateado a 2 decimales (.toFixed(2))
    resultado.textContent = `Resultado: $${total.toFixed(2)}`;
});