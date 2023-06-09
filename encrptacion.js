// Función para encriptar un número de 4 dígitos
function encriptarNumero() {
    //obteniendo el numero a encriptar
    const numero = document.getElementById("numeroOriginal").value;

    // Convertir el número en una cadena de texto
    let numeroStr = numero.toString();

    // Asegurarse de que el número tenga 4 dígitos
    while (numeroStr.length < 4) {
        numeroStr = "0" + numeroStr;
    }

    // Invertir los dígitos
    let numeroInvertido = numeroStr.split("").reverse().join("");

    // Convertir cada dígito en su equivalente en ASCII
    let numeroEncriptado = "";
    for (let i = 0; i < 4; i++) {
        const digito = numeroInvertido.charCodeAt(i);
        numeroEncriptado += digito;
    }


    document.getElementById("resultadoEncriptado").innerHTML = numeroEncriptado;

    console.log(numeroEncriptado);
}

// Función para desencriptar un número de 4 dígitos
function desencriptarNumero(numeroEncriptado) {
    let numeroDesencriptado = "";

    // Recuperar los dígitos encriptados
    const digitosEncriptados = numeroEncriptado.match(/.{1,2}/g);

    // Convertir cada dígito en su equivalente en ASCII
    for (let i = 0; i < digitosEncriptados.length; i++) {
        const digito = String.fromCharCode(parseInt(digitosEncriptados[i]));
        numeroDesencriptado += digito;
    }

    // Invertir los dígitos nuevamente
    const numeroOriginal = numeroDesencriptado.split("").reverse().join("");

    return parseInt(numeroOriginal);
}