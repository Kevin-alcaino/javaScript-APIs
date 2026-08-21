
# 📄 Prueba JavaScript - APIs - Conversor de monedas Pesos Chilenos.

## 🧠 Descripción del proyecto.

Se crea un conversor de monedas de pesos chilenos a las diferentes `monedas` que se encuentran en la API local `mindicador`. Conceptos clave utilizados en este proyecto:

### 1. Asincronía
```javascript
async function get

```

### 2. Manejo de Errores

* **`try...catch`**
Si algo falla o rompe el código, la ejecución salta al bloque `catch`.

### 3. Funciones Principales

```javascript
getMonedas()
```
 Función asíncrona encargada de buscar el archivo `mindicador.json`.

 ```javascript
mindicador.json
 ```
recorrer los datos y rellena los `<select>` del HTML con las opciones.

### 4. Manipulación del DOM y Eventos

* **`document.querySelector()`** Permite seleccionar y capturar elementos específicos del HTML.
* **`addEventListener("click", ...)`** Método que escucha la acción del usuario al hacer clic sobre un botón.
* **`Number(...)`** Transforma los valores de texto obtenidos de los inputs en formato numérico para poder realizar operaciones matemáticas.
* **`isNaN(...)`** Evalúa si un valor **no** es un número válido.
* **Operación matemática** Se divide el monto ingresado (`montoClp`) entre el valor de la moneda seleccionada (`valorMoneda`).
* **`.toFixed(2)`** Método numérico que limita el resultado a exactamente dos cifras decimales.
* **Plantillas literales (`${...}`)** Permiten incrustar variables directamente dentro de cadenas de texto, se usan para actualizar `resultado.textContent`.

## 🛠 Tecnologías implementadas

* **`HTML5`** Estructura semántica de la página.
* **`CSS`** Diseño y control de la presentación visual.
* **`JavaScript`** Interactividad y dinamismo.
* **`Git`** Control de versiones para gestionar cambios en el código.

## 🏗️ Estructura del proyecto.

```text
 ┣ 📂assets
 ┃ ┣ 📂css
 ┃ ┃ ┗ 📜style.css
 ┃ ┣ 📂img
 ┃ ┗ 📂javScript
 ┃ ┃ ┗ 📜script.js
 ┣ 📜index.html  
 ┣ 📜mindicador.json
 ┗ 📜README.md         <= Aqui nos encontramos.

```

## 🔗 Links.

Actualmente estoy trabajando en: [Prueba JavaScript - APIs - Conversor de monedas CLP](https://kevin-alcaino.github.io/javaScript-APIs/)

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://kevin-alcaino.github.io/Kevin-alcaino.io/)

## 🙋‍♂️ Autor.

© 2026. Kevin Alcaino. 

