import Layout from "../layout/Layout"
import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function discografia() {
    
    const[canciones, setCanciones] = useState([])

    const obtenerCanciones = async () => {
        try {
           const resultado = await axios.get('/api/canciones')
            setCanciones(resultado.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtenerCanciones()
    }, [])
    
    return(
        <Layout
            title="Canciones"
        >
           <div className="contenedorCanciones">
                <h1>Canciones</h1>
                
                <div className="row">                   
                    {canciones.map(cancion =>
                    
                        <div className="col-sm-3">
                            <div key={cancion.id} className="card">
                                <Link href="https://open.spotify.com/artist/1BWM5PrF4Y4okQivlVUt8T"><Image width={100} height ={250} className="card-img-top" src={`/assets/img/${cancion.imagen}`} alt={`imagen de ${cancion.nombre}`} /></Link>
                                    <div className="card-body">
                                        <h5 className="card-title">{cancion.nombre}</h5>
                                        <h6 className="card-title">{cancion.descripcion}</h6>
                                        <h6 className="card-title">Album: {cancion.album}</h6>
                                        <p className="card-text">año: {cancion.anio}</p>               
                                        <button type="button" class="btn btn-primary">Escuchar</button>             
                                    </div>
                            </div>  
                        </div>
                         
                    )}                 
                </div>
           </div>
            


        </Layout>
        
    )
}