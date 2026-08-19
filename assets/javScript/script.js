const selectMoneda = document.querySelector("#select-moneda")
async function monedas() {
    const res = await fetch("mindicador.json");

    const data = await res.json()

}

monedas();