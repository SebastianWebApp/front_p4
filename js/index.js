


document.getElementById("Btn_L1").addEventListener('click', async() =>{

    const Solicitud = await fetch(`/api/servidor3/`, {
    method: "GET",  // Cambiar a POST
    headers: {
        "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
    }
});

const Respuesta_Servidor = await Solicitud.json();

if (Respuesta_Servidor.Estado) {
    alert(Respuesta_Servidor.Respuesta)
    
   
}
else{
    alert(Respuesta_Servidor.Respuesta)
}

});


document.getElementById("Btn_L2").addEventListener('click', async() =>{

    const Solicitud = await fetch(`/api/servidor2/`, {
    method: "GET",  // Cambiar a POST
    headers: {
        "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
    }
});

const Respuesta_Servidor = await Solicitud.json();
    alert(Respuesta_Servidor.Respuesta)

if (Respuesta_Servidor.Estado) {
    alert(Respuesta_Servidor.Respuesta)
    
   
}
else{
    alert(Respuesta_Servidor.Respuesta)
}

});

document.getElementById("Btn_L3").addEventListener('click', async() =>{

    const Solicitud = await fetch(`/api/servidor1/`, {
    method: "GET",  // Cambiar a POST
    headers: {
        "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
    }
});

const Respuesta_Servidor = await Solicitud.json();

if (Respuesta_Servidor.Estado) {
    alert(Respuesta_Servidor.Respuesta)
    
   
}
else{
    alert(Respuesta_Servidor.Respuesta)
}

});