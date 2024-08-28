function cifrarTexto(){
    let cifrarTexto = document.getElementById('cifrarTexto').value;
    let encriptarTexto = cifrarTexto.split('').reverse().join('');
    document.getElementById('decifrarTexto').value = encriptarTexto;
}


function decifrarTexto() {
    let encriptarTexto = document.getElementById('decifrarTexto').value;
    let decifrarT = encriptarTexto.split('').reverse().join(''); // Desencriptar invirtiendo nuevamente el texto
    document.getElementById('decifrarTexto').value = decifrarT;
}

// Función para copiar el texto encriptado al portapapeles
function copyText() {
    let outputText = document.getElementById('decifrarTexto');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');
    alert('Texto copiado: ' + outputText.value);
}
