// 1. Captura de elementos del HTML
const inputMonto = document.querySelector("#monto")
const selectMoneda = document.querySelector("#select-moneda")
const boton = document.querySelector("#boton")
const resultado = document.querySelector("#resultado")

// 2. Función Asinc para cargar las monedas del archivo .JSON
async function getMonedas() {
    const res = await fetch("mindicador.json");
    const data = await res.json();

    // Se rellena el select con las claves del archivo JSON
    for (let moneda of data ){
        const item = data[clave];
    }
    
}
