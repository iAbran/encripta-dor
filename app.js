function encriptar() {
    let texto = document.getElementById("caja-encriptar").value.toLowerCase();
  
    let texArea = texto.replace(/e/g, "enter");
    texArea = texArea.replace(/o/g, "ober");
    texArea = texArea.replace(/i/g, "imes");
    texArea = texArea.replace(/a/g, "ai");
    texArea = texArea.replace(/u/g, "ufat");

    document.getElementById("caja-encriptado").innerHTML = texArea;
}

function desencriptar() {
    let texto = document.getElementById("caja-encriptar").value.toLowerCase();

    let texArea = texto.replace(/enter/g, "e");
    texArea = texArea.replace(/ober/g, "o");
    texArea = texArea.replace(/imes/g, "i");
    texArea = texArea.replace(/ai/g, "a");
    texArea = texArea.replace(/ufat/g, "u");

    document.getElementById("caja-encriptado").innerHTML= texArea;
}

function copy() {
    let contenido = document.getElementById("caja-encriptado");
    contenido.select();
    document.execCommand("copy");
    alert('Copied')
    
}

