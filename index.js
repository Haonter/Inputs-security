const botonEnviar = document.getElementById('enviar');

botonEnviar.addEventListener('click', () => {
    const input = document.getElementById('nombre').value;
    const div = document.getElementById('salida');
    

    // Usamos regex para validar que se ingresen solo letras
    // if (!/^[a-zA-Z]+$/.test(input)) {
    //     div.innerHTML = 'Solo se permiten letras';
    // }else{
    //     div.innerHTML = input;
    // }
    // En este ejemplo podemos notar que al comentar la condiciones de regex, se puede ingresar 
    // cualquier tipo de caracter, incluyendo etiquetas html, lo que puede ser peligroso para 
    // la seguridad de la página

    div.innerHTML = input;
});