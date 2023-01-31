import { PrismaClient } from "@prisma/client"

export default async function handler(req, res){
    
    const prisma = new PrismaClient()

    if(req.method === 'POST'){
        const mensajeContacto = await prisma.mensaje.create({
            data: {
                 mensaje: req.body.mensaje,
                 mail: req.body.mail,
                 nombre: req.body.nombre
            },
             
         })
         res.json(mensajeContacto)
    }
    

    
    
}