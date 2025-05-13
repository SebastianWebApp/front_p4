import { Crear, Leer, Leer_id, Actualizar, Eliminar} from "../Servicios/api_crud_mysql.js"


const API_SERVIDOR1  = process.env.API_SERVIDOR1;
const API_SERVIDOR2  = process.env.API_SERVIDOR2;
const API_SERVIDOR3  = process.env.API_SERVIDOR3;


export const Crear_Nuevo = async(req, res) =>{

    const Pasar_Crear = await Crear(req,res);

    res.status(Pasar_Crear.Status).json({
        Estado: Pasar_Crear.Estado,
        Respuesta: Pasar_Crear.Respuesta
    });

}

export const Leer_Nuevo = async(req, res) =>{

    const Pasar_Leer = await Leer(req,res);

    if(Pasar_Leer.Estado){
        res.status(Pasar_Leer.Status).json({
            Estado: Pasar_Leer.Estado,
            Respuesta: Pasar_Leer.Respuesta,
            Contenido: Pasar_Leer.Contenido
        });
    }
    else{
        res.status(Pasar_Leer.Status).json({
            Estado: Pasar_Leer.Estado,
            Respuesta: Pasar_Leer.Respuesta
        });
    }
}

export const Leer_id_Nuevo = async(req, res) =>{

    const Pasar_Leer_id = await Leer_id(req,res);

    if(Pasar_Leer_id.Estado){
        res.status(Pasar_Leer_id.Status).json({
            Estado: Pasar_Leer_id.Estado,
            Respuesta: Pasar_Leer_id.Respuesta,
            Contenido: Pasar_Leer_id.Contenido
        });
    }
    else{
        res.status(Pasar_Leer_id.Status).json({
            Estado: Pasar_Leer_id.Estado,
            Respuesta: Pasar_Leer_id.Respuesta
        });
    }

}

export const Actualizar_Nuevo = async(req, res) =>{

    const Pasar_Actualizar = await Actualizar(req,res);

    res.status(Pasar_Actualizar.Status).json({
        Estado: Pasar_Actualizar.Estado,
        Respuesta: Pasar_Actualizar.Respuesta
    });

}

export const Eliminar_Nuevo = async(req, res) =>{

    const Pasar_Eliminar = await Eliminar(req,res);

    res.status(Pasar_Eliminar.Status).json({
        Estado: Pasar_Eliminar.Estado,
        Respuesta: Pasar_Eliminar.Respuesta
    });

}

export const Servidor1 = async (req, res) => {
  try {


        const Solicitud = await fetch(API_SERVIDOR1, {
            method: "GET",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            }          
            
        });
    

        const Respuesta_Servidor = await Solicitud.json();
    
        res.status(200).json({
            Estado: Respuesta_Servidor.Estado,
            Respuesta: Respuesta_Servidor.Respuesta,

        });

        
        
        
    } catch (error) {

          
        res.status(400).json({
    
          Estado: false,
          Respuesta: "Base de datos no encontrada"
        });
    }

  };

export const Servidor2 = async (req, res) => {
  try {


        const Solicitud = await fetch(API_SERVIDOR2, {
            method: "GET",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            }          
            
        });
    

        const Respuesta_Servidor = await Solicitud.json();
    
        res.status(200).json({
            Estado: Respuesta_Servidor.Estado,
            Respuesta: Respuesta_Servidor.Respuesta,

        });

        
        
        
    } catch (error) {

          
        res.status(400).json({
    
          Estado: false,
          Respuesta: "Base de datos no encontrada"
        });
    }

  };

export const Servidor3 = async (req, res) => {
  try {


        const Solicitud = await fetch(API_SERVIDOR3, {
            method: "GET",  // Cambiar a POST
            headers: {
                "Content-Type": "application/json"  // Especificamos que los datos están en formato JSON
            }          
            
        });
    

        const Respuesta_Servidor = await Solicitud.json();
    
        res.status(200).json({
            Estado: Respuesta_Servidor.Estado,
            Respuesta: Respuesta_Servidor.Respuesta,

        });

        
        
        
    } catch (error) {

          
        res.status(400).json({
    
          Estado: false,
          Respuesta: "Base de datos no encontrada"
        });
    }

  };