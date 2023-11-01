let elementInit = document.getElementById("firstElement");

// Estamos recorriendo todos los elementos a través de sus hermanos
while (elementInit) {
    // Agregamos contenido al div con id="textResult"
    document.getElementById("textResult").innerHTML += `<p>
        ${elementInit.nodeName}
        ${elementInit.innerHTML}
    </p>`;
    
    // Estas líneas permiten recorrer los elementos de manera correcta
    // pero presentan algunos problemas, explicados a continuación:

    // Esta línea agrega texto (nodos de tipo texto "#text") y en algunos navegadores
    // podría devolver "undefined" si el siguiente elemento es un salto de línea o espacio en blanco.
    // elementInit = elementInit.nextSibling;
    
    // Para evitar mostrar "undefined" cuando existen saltos de línea o espacios en blanco,
    // utilizamos "nextElementSibling" en lugar de "nextSibling".
    // Esta alternativa solo recorre los elementos HTML, omitiendo los nodos de texto.
    elementInit = elementInit.nextElementSibling;
}
