import dotenv from "dotenv"

dotenv.config();

const API_BACKEND  = process.env.API_BACKEND;


// 📌 CREATE - Agregar una persona
export const Crear = async (req, res) => {


  try {

        const { nombre, edad, email } = req.body;

        const Solicitud = await fetch(API_BACKEND+`/personas`, {
            method: "POST",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            },
            body: JSON.stringify({
                nombre: nombre,
                edad: edad,
                email: email
            })
            
        });
    
        const Respuesta_Servidor = await Solicitud.json();
    
        return {
    
          Estado: Respuesta_Servidor.Estado,
          Respuesta: Respuesta_Servidor.Respuesta,
          Status: Respuesta_Servidor.Status
    
        };
        
    } catch (error) {
          
        return {
    
          Estado: false,
          Respuesta: "Base de datos no encontrada1",
          Status: 400 

        };
    }
   };

// 📌 READ - Obtener todas las personas
export const Leer = async (req, res) => {
  try {


        const Solicitud = await fetch(API_BACKEND+`/personas`, {
            method: "GET",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            }          
            
        });
    

        const Respuesta_Servidor = await Solicitud.json();
    

        if(Respuesta_Servidor.Estado){

          return {            
            Estado: Respuesta_Servidor.Estado,
            Respuesta: Respuesta_Servidor.Respuesta,
            Contenido: Respuesta_Servidor.Contenido,
            Status: Respuesta_Servidor.Status
          };
        }
        else{
          return {            
            Estado: Respuesta_Servidor.Estado,
            Respuesta: Respuesta_Servidor.Respuesta,
            Status: Respuesta_Servidor.Status
          };
        }
        
        
    } catch (error) {

          
        return {
    
          Estado: false,
          Respuesta: "Base de datos no encontrada",
          Status: 400 

        };
    }

  };
  
  // 📌 READ - Obtener una persona por ID
  export const Leer_id = async (req, res) => {

      try {

        const { id } = req.params;


        const Solicitud = await fetch(API_BACKEND+`/personas/`+id, {
            method: "GET",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            }          
            
        });
    
        const Respuesta_Servidor = await Solicitud.json();
    
        if(Respuesta_Servidor.Estado){

          return {            
            Estado: Respuesta_Servidor.Estado,
            Respuesta: Respuesta_Servidor.Respuesta,
            Contenido: Respuesta_Servidor.Contenido,
            Status: Respuesta_Servidor.Status
          };
        }
        else{
          return {            
            Estado: Respuesta_Servidor.Estado,
            Respuesta: Respuesta_Servidor.Respuesta,
            Status: Respuesta_Servidor.Status
          };
        }
        
    } catch (error) {
          
        return {
    
          Estado: false,
          Respuesta: "Base de datos no encontrada",
          Status: 400 

        };
    }





  };
  
  // 📌 UPDATE - Actualizar persona por ID
  export const Actualizar = async (req, res) => {

    try {

        const { id } = req.params;
        const { nombre, edad, email } = req.body;

        const Solicitud = await fetch(API_BACKEND+`/personas/`+id, {
            method: "PUT",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            },
            body: JSON.stringify({
                nombre: nombre,
                edad: edad,
                email: email
            })
            
        });
    
        const Respuesta_Servidor = await Solicitud.json();
    
        return {
    
          Estado: Respuesta_Servidor.Estado,
          Respuesta: Respuesta_Servidor.Respuesta,
          Status: Respuesta_Servidor.Status
    
        };
        
    } catch (error) {
          
        return {
    
          Estado: false,
          Respuesta: "Base de datos no encontrada",
          Status: 400 

        };
    }

  };
  
  // 📌 DELETE - Eliminar persona por ID
  export const Eliminar = async (req, res) => {
 
  try {

        const { id } = req.params;

        const Solicitud = await fetch(API_BACKEND+`/personas/`+id, {
            method: "DELETE",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            }           
            
        });
    
        const Respuesta_Servidor = await Solicitud.json();
    
        return {
    
          Estado: Respuesta_Servidor.Estado,
          Respuesta: Respuesta_Servidor.Respuesta,
          Status: Respuesta_Servidor.Status
    
        };
        
    } catch (error) {
          
        return {
    
          Estado: false,
          Respuesta: "Base de datos no encontrada",
          Status: 400 

        };
    }

  };
  
