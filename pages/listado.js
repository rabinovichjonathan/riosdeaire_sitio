import useRios from "../hooks/useRios"
import "../public/riosdeaire.jpeg"
import Image from "next/image"
import Layout from "../layout/Layout"
import Modal from '../components/Modal'

export default function Listado(){
   
   const { fechas } = useRios()
    

   

   return(
      <>
        <Layout
            title ="Home"
        >
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image className="d-block w-100" width="500" height="600" src="/../public/riosdeaire.jpeg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <Image className="d-block w-100" width="500" height="600" src="/../public/riosdeaire2.png" alt="First slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Siguiente</span>
                </a>
            </div>

            <div className='bg-warning w-100 mt-4'>
                <h1 className='tituloProximasFechas'>Próximas fechas</h1>
            </div>
            
            {fechas.map( fecha => 
                <div key={fecha.id} className="fecha">
                    <h3 className="text-dark">{fecha.fecha}</h3>
                    <h1 className="text-warning">{fecha.nombre}</h1>
                    <h2 className="ml-2">{fecha.lugar} {fecha.numero}</h2>
                    <button type="button" className="buttonVerMas btn btn-danger d-flex align-items-end" data-toggle="modal" data-target={`#a${fecha.id}`}>Ver más</button>
                    <Modal id={fecha.id} fecha={fecha.fecha} nombre={fecha.nombre} lugar ={fecha.lugar} entrada={fecha.entrada} imagen={fecha.imagen} hora={fecha.hora} localidad={fecha.localidad} pais={fecha.pais} codigoPostal={fecha.codigoPostal} numero={fecha.numero}/>
                    <div className="separadorFechas">
                        <hr></hr>
                    </div>
                </div>
                
            )}
        </Layout>
            
        
      </> 
       
    )
}

