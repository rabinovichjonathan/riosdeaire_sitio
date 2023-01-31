import { PrismaClient } from "@prisma/client";

export default async function handler(req, res){
    const prisma = new PrismaClient()
    const fechas = await prisma.fecha.findMany();
    res.status(200).json(fechas)
}