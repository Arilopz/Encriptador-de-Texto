const campo_texto = document.querySelector("#texto-encriptado")
const campo_mensaje = document.querySelector("#campo-mensaje")
const muneco = document.getElementById("imagenMunecos")
const mensajeNin = document.getElementById("mensajeNiguno")
const btncopiar = document.getElementById("btncopiar")

const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];
function btnEncriptar () {
    const texto = encriptar(campo_texto.value.toLowerCase ());
    campo_mensaje.value = texto;

    muneco.style.display = "none"
    mensajeNin.style.display = "none"
    btncopiar.style.display = "block"
    campo_mensaje.classList.add("ajustar")

}

function encriptar(fraseEncriptada){
    for(let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    return fraseEncriptada;


}

function btnDesencriptar() {
    const texto = desencriptar(campo_mensaje.value.toLowerCase ());
    campo_mensaje.value = texto;
    
}

function desencriptar(fraseEncriptada) {
    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseEncriptada.includes(matriz_code[i][1])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            );
        }
    }
    return fraseEncriptada;
}
function btnCopiar () {
    const contenido = document.querySelector ("#campo-mensaje")
    contenido.select();
    document.execCommand('copy');
   alert ("texto copiado")
    
}

