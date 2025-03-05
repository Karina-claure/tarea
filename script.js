function mostrarDatos() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    
    if (nombres && apellidos && correo && contrasena) {
        document.getElementById("output").innerHTML = 
            `<p><strong>Nombres:</strong> ${nombres}</p>
             <p><strong>Apellidos:</strong> ${apellidos}</p>
             <p><strong>Correo:</strong> ${correo}</p>`;
    } else {
        alert("Por favor, complete todos los campos.");
    }
}
