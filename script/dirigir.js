function login(){
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;

    if( user == "Sergio Gabriel" && password == "123"){
        window.location = "codigos/usuario1.HTML";
    } 

    else if( user == "Cinthia Fabiola" && password == "123"){
        window.location = "codigos/usuario2.HTML";
    } 

    else if( user == "Jose Armando" && password == "123"){
        window.location = "codigos/usuario3.HTML";
    } else{
        alert("Datos Incorrectos")
    }
}