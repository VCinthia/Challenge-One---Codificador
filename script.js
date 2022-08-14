const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");
const imagen = document.querySelector(".muñeco")

function btnencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);    
    mensaje.value = textoEncriptado;
    ocultarImagen();
    mostrarSecDesencrip();
}

function btndesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;

}

function encriptar(StringParaEncriptar){
        
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
    
}

/*Hasta aqui con Live Alura ORACLE*/

function desencriptar(StringParaEncriptar){

    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
}

//ocultar el .input-text-area del desencriptador funcionando
 function ocultarImagen(){
    document.getElementById('imgMuñ').style.display= 'none';
}  

//mostrar el boton copiar funcionando
function mostrarSecDesencrip(){
    document.getElementById('copiar').style.display= 'block';
    document.getElementById('textdes').style.display= 'block';
} 

//copiar texto almacenado en StringParaEncriptar funcionando
function btncopiar(){
    var contenido = document.querySelector(".input-text-area")
    contenido.select();
    document.execCommand("copy");
    alert("El texto se copió correctamente");
}