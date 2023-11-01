let elementInit = document.getElementById("firstElement");

while(elementInit){
    document.getElementById("textResult").innerHTML += ` <p>
        ${elementInit.nodeName}
        ${elementInit.innerHTML}
    </p>`

    elementInit = elementInit.nextSibling;
}