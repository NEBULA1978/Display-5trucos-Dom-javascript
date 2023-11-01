function remove(element) {
    // Function to remove the clicked paragraph
    // Función para eliminar el párrafo al hacer clic
    console.log(element);

    // Log the clicked element (button)
    // Mostrar en consola el elemento (botón) que se ha activado
    const parent = element.parentNode;
    console.log(parent);

    // Find the parent element (paragraph) of the button
    // Encontrar el elemento padre (párrafo) del botón
    const grandpa = parent.parentNode;
    console.log(grandpa);

    // Remove the parent (paragraph) from the grandparent (div)
    // Eliminar el elemento padre (párrafo) del elemento abuelo (div)
    grandpa.removeChild(parent);
}
