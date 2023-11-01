// Accessing all the <script> elements present in the document
// Accediendo a todos los elementos <script> presentes en el documento
var scripts = document.scripts;

// Modifying the value of the data-some attribute in the first <script> element
// Modificando el valor del atributo data-some en el primer elemento <script>
scripts[0].dataset.some = "something different"; // Cambiando el valor del atributo data-some a "algo distinto"

// Displaying the content within the first <script> element
// Mostrando el contenido dentro del primer elemento <script>
console.log(scripts[0].text);

// Evaluating and executing the JavaScript code within the first <script> element using eval()
// Evaluando y ejecutando el código JavaScript dentro del primer elemento <script> usando eval()
eval(scripts[0].text);
