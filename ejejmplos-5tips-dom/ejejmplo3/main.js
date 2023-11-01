// Creamos arreglo is
// Seleccionamos todos los elementos 'i' y los guardamos en la variable 'is'
is = document.getElementsByTagName("i");

// optenemos con arreglo el padre de is
// Obtenemos el padre del primer elemento 'i' y lo guardamos en la variable 'parent'
parent = is[0].parentNode;

// Mientras haya elementos 'i' en el documento, continuamos el bucle
while (document.getElementsByTagName("i").length > 0) {
    // Obtenemos el primer elemento 'i'
    i = document.getElementsByTagName("i")[0];

    // Reemplacmos etiquetas poniendo package, h2, h3, etc
    // Creamos un nuevo botón
    button = document.createElement("button");
    
    // button = document.createElement("p");

    // Asignamos el contenido del botón con el contenido del elemento 'i'
    button.innerHTML = i.innerHTML;

    // Reemplazamos el elemento 'i' con el botón creado
    parent.replaceChild(button, i);
}
