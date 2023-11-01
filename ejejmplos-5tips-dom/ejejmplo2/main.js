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
//    Resumen: nos muestra el elemento que es y su contenido" es una descripción precisa y correcta de lo que hace el bloque de código en el bucle while.

// El código itera a través de los elementos hermanos comenzando desde el elemento con el ID "firstElement" y, en cada iteración, agrega un párrafo al elemento con ID "textResult". Este párrafo contiene información sobre el tipo de elemento (nodeName) y su contenido (innerHTML) para cada elemento hermano.

// En resumen, efectivamente, el código muestra el tipo de cada elemento y el contenido de esos elementos en el elemento con el ID "textResult". Por lo tanto, el comentario proporciona una descripción precisa de la funcionalidad del código.
}
