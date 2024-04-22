window.onload = function(){
    document.getElementById("enviar").addEventListener("click", registrarUsuario);
    document.getElementById("DOM").addEventListener("click", registrarUsuarioDOM);

    function registrarUsuario() {
        console.log("click en el boton");
        // Captura de datos del formulario
        let username = document.getElementById("usuario").value;
        //console.log(username);
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let edad = document.getElementById("edad").value;
        let pass = document.getElementById("password").value;
        // Insertar en la tabla
        const bodytabla = document.getElementById("tab_body1");
        let str_insercion = "<tr><td>" + username + "</td><td>" 
            + nombre + "</td><td>" 
            + apellido + "</td><td>" 
            + edad + "</td></tr>";
        bodytabla.innerHTML += str_insercion;
    }
    function registrarUsuarioDOM(){
        console.log("DOM");
        //Captura de datos del formulario
        let username = document.getElementById("usuario").value;
        //console.log(username);
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let edad = document.getElementById("edad").value;
        let pass = document.getElementById("password").value;

        //Insercion en la tabla
        const col1 = document.createElement("td");
        const texto1 = document.createTextNode(username);
        col1.appendChild(texto1);

        const col2 = document.createElement("td");
        const texto2 = document.createTextNode(nombre);
        col2.appendChild(texto2);
        
        const col3 = document.createElement("td");
        const texto3 = document.createTextNode(apellido);
        col3.appendChild(texto3);

        const col4 = document.createElement("td");
        const texto4 = document.createTextNode(edad);
        col4.appendChild(texto4);
        
        
        const row = document.createElement("tr");
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        document.getElementById("tab_body1").appendChild(row);

    }
}