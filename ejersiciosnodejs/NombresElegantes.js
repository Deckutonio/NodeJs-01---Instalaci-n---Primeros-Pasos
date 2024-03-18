function esNombreElegante(nombre){
    nombre = nombre.toLowerCase();

    if(nombre.charAt(0)=== nombre.charAt(nombre.length - 1)){
        console.log(nombre,": true")
        return true;
    }else{
        console.log(nombre,": false")
        return false;
    }
}


function verificarNombresElegantes(amigos){
    let nombresElegantes = [];
    for(let i=0; i < amigos.length; i++){
        if(esNombreElegante(amigos[i])){
            nombresElegantes.push(amigos[i]);
        }
    }
    return nombresElegantes;
}

let amigos = ["Ana"]
let nombresElegantes = verificarNombresElegantes(amigos);