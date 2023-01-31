import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import axios from 'axios';
import { useEffect, useState } from 'react'
import Modal from './Modal';


const Mapa = ({lugar, localidad, codigoPostal, pais, numero}) => {
    
    const [longitud, setLongitud] = useState('')
    const [latitud, setLatitud] = useState('')
        
        
    const conectarGeocoding = async () => {
        
        try {
            const url = `https://api.geoapify.com/v1/geocode/search?text=${numero}%20${lugar}%20${localidad}%20${codigoPostal}%20${pais}&apiKey=dc86a47dc0c4473b89296fb00ca4a70d`
            const result = await axios(url)
            setLongitud(result.data.features[0].properties.lon)
            setLatitud(result.data.features[0].properties.lat)
            console.log(longitud)
            console.log(latitud)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        conectarGeocoding()
    }, [<Modal />])

   
    

    return(
        <>
            <h4>Encontrá el lugar en el mapa</h4>
            
            <iframe src={`https://www.google.com/maps?q=${latitud},${longitud}&h1=es;&output=embed`} height="200%"></iframe>
        </>
        
    )
}

export default Mapa