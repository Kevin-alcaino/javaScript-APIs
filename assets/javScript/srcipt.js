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

       
            if (item && typeof item === "object" && item.codigo && item.valor) {
                const option = document.createElement("option");
                option.value = item.codigo;
                option.textContent = item.nombre;

                // Se guarda el valor númerico en el atributo "dataset"
                option.dataset.valor = item.valor;
                selectMoneda.appendChild(option);
            }
    }
}  catch (error){
    resultado.textContent = "Error al cargar monedas.";
    console.error(error);
} 
}
getMonedas();

