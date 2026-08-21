// 1. Captura de elementos del HTML
const inputMonto = document.querySelector("#monto")
const selectMoneda = document.querySelector("#select-moneda")
const boton = document.querySelector("#boton")
const resultado = document.querySelector("#resultado")

// 2. Función Asinc para cargar las monedas del archivo .JSON
async function getMonedas() {
    try{
    const res = await fetch("mindicador.json");
    const data = await res.json();

    // Se rellena el select con las claves del archivo JSON
    for (const clave in data ){
        const item = data[clave];

       
           if (item && typeof item === "object" && "codigo" in item && "valor" in item) {
                const option = document.createElement("option");
                option.value = item.codigo;
                option.textContent = item.nombre || item.codigo;

                // Se guarda el valor númerico en el atributo "dataset"
                option.dataset.valor = item.valor;
                selectMoneda.appendChild(option);
            }
        }
    } catch (error) {
        resultado.textContent = "Error al cargar monedas.";
        console.error(error);
    } 
}
getMonedas()

// 3. Capturamos el evento click del boton
boton.addEventListener("click",()=>{
    const montoClp = Number(inputMonto.value);

    if (!montoClp || isNaN(montoClp) || montoClp <= 0) {
        resultado.textContent = "Por favor, ingresa un monto válido.";
        return;
    } 

    const opcionSeleccionada = selectMoneda.selectedOptions[0];
    if (!opcionSeleccionada || !opcionSeleccionada.dataset.valor) {
        resultado.textContent = "Por favor, selecciona una moneda.";
        return;
    }

    const valorMoneda = Number(opcionSeleccionada.dataset.valor);
    const nombreMoneda = opcionSeleccionada.textContent;

    // Calculo
    const total = montoClp / valorMoneda;
    console.log("total:", total);

    // Resultado 
    resultado.textContent = `Resultado: $${total.toFixed(2)} ${nombreMoneda}`;
});



