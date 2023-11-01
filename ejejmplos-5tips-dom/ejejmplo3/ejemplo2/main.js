document.addEventListener('DOMContentLoaded', function() {
    // Creamos arreglo is
    // Seleccionamos todos los elementos 'i' y los guardamos en la variable 'is'
    is = document.getElementsByTagName("i");

    // optenemos con arreglo el padre de is
    // Obtenemos el padre del primer elemento 'i' y lo guardamos en la variable 'parent'
    parent = is[0].parentNode;

    // Crea un input para introducir el valor del botón
    const input = document.getElementById('buttonValueInput');

    // Añade un evento change al input para aplicar el valor del botón a todos los elementos `i`
    input.addEventListener('change', function() {
        const buttonValue = input.value;

        // Recorre todos los elementos `i` y aplícales el valor del botón seleccionado
        for (const i of is) {
            // Creamos un nuevo botón
            button = document.createElement("button");
            button.textContent = buttonValue;

            // Reemplazamos el elemento 'i' con el botón creado
            parent.replaceChild(button, i);
        }
    });
});
