import { PrismaClient } from "@prisma/client";

export default async function handler(req, res){
    const prisma = new PrismaClient()
    const canciones = await prisma.cancion.findMany();
    res.status(200).json(canciones)
}