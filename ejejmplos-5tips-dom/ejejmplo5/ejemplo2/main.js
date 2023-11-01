// Obtener todos los scripts presentes en el documento HTML
const scripts = document.scripts;

// Imprimir en la consola el texto del primer script encontrado en el documento
console.log(scripts[0].text);

// Evaluar y ejecutar el código contenido en el primer script del documento
eval(scripts[0].text);
