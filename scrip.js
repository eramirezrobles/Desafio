const ingresoTexto = document.getElementById
("ingresoTexto");
const botonEncriptar = document.getElementById
("botonEncriptar");
const botonDesencriptar = document.getElementById
("botonDesencriptar");
const botonCopiar = document.getElementById
("botonCopiar");
const mensajeFinal = document.getElementById
("mensajeFinal");
const muñeco = document.getElementById
("muñeco");
const rightInfo = document.getElementById
("rightInfo");
const right = document.getElementById
("right");

//e - enter
//i - imes
//a - ai
//o - ober
//u - ufat

let reemplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]
const remplace = (nuevoValor) =>{
    mensajeFinal.innerHTML = nuevoValor;

    muñeco.style.display = "none"
    ingresoTexto.value= "";
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block"
    right.classList.add ("ajustar")
    mensajeFinal.classList.add ("ajustar")
  }

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase()
    if(texto != ""){
        function encriptar(newtext) {
            for(let i = 0; i < reemplazar.length; i++){
             if(newtext.includes(reemplazar[i][0])){
                 newtext = newtext.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            };
        };
        return newtext;
        }; 
    } else {
        alert ("ingrese el texto a encriptar");

    }
       remplace (encriptar(texto));
   
    
})

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase()
    if(texto != ""){
        function desencriptar(newtext) {
        for(let i = 0; i < reemplazar.length; i++){
            if(newtext.includes(reemplazar[i][1])){
                newtext = newtext.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            };
        };
        return newtext;
        };
    } else{
        alert ("ingrese el texto a desencriptar");
    }
    remplace (desencriptar (texto))
})

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy");
    alert("Texto Copiado");

    mensajeFinal.innerHTML = ""

    muñeco.style.display = "block"
    rightInfo.style.display = "none";
    botonCopiar.style.display = "none"
    right.classList.remove ("ajustar")
    mensajeFinal.classList.remove ("ajustar")
    ingresoTexto.focus();

})