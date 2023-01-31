import Image from "next/image"
import dynamic from "next/dynamic";

const Modal = ({id, nombre, fecha, lugar, hora, entrada, imagen, localidad, codigoPostal, pais, numero}) => {
    
    const MapWithNoSSR = dynamic(() => import("./Mapa"), {
        ssr: false
    })

    return(
        <>

        
            <div className="modal fade" id={`a${id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Show del {fecha}</h5>
                            
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <Image className="card-img mb-2" src={`/../public/assets/img/${imagen}`} height={300} width={200} alt={`foto de ${nombre}`} />
                        
                        <div className="d-flex mt-5">
                            <ul>
                                <li>
                                    <p className="card-text d-inline-flex">¿En donde es?</p><p className="text-danger d-inline-flex p-2"> {lugar} {numero}, {localidad}</p>
                                </li> 
                                <li>
                                    <p className="card-text d-inline-flex">El lugar se llama:</p><p className="text-danger d-inline-flex p-2">{nombre}</p>
                                </li>
                                <li>
                                    <p className="card-text d-inline-flex">¿A qué hora empieza?</p> <p className="text-danger d-inline-flex p-2">{hora}</p>
                                </li>
                                <li>
                                    <p className="card-text d-inline-flex">¿Cuanto cuesta la entrada?</p> <p className="text-danger d-inline-flex p-2">{entrada}</p>
                                </li> 
                            </ul>
                            
                            <div id="map">
                                <MapWithNoSSR lugar={lugar} localidad={localidad} pais={pais} codigoPostal={codigoPostal} numero={numero}/>
                            </div>
                            
                        </div>
                            
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            
                        </div>
                    </div>
                </div>
            </div>
    
        </>
    )
}

export default Modal