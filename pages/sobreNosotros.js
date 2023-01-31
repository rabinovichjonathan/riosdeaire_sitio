import Layout from "../layout/Layout"
import Image from "next/image"

export default function SobreNosotros() {
    return(
        <Layout
            title="Sobre nosotros"
        >
            <div className="contenedorCanciones">
                <h1 className="mb-5">Sobre nosotros</h1>
                <div className="contenedorImagenYtexto d-inline-flex">
                    <Image className="shadow-lg p-3 mb-5 bg-white rounded" src="/../public/riosdeaire3.jpeg" height={300} width={500}></Image>
                    <p className="textoSobreNosotros">Somos un grupo de amigos que se conoció estudiando música en la Escuela de Música Popular de Avellaneda y que decidió desarrollar un proyecto musical que contemple diversos estilos musicales propios de Argentina. Buscamos expresar nuestra creatividad en forma de canciones que nos hagan vibrar en consonancia con los sonidos del Río de la Plata.</p>
                </div>
                    
                <h2 className="text-start mt-5">Integrantes</h2>
                <ul>
                    <li>
                        <h4 className="d-inline-flex">Gabriel Ingiulla:</h4><h4 className="text-danger d-inline-flex p-2">guitarra y voz</h4>
                    </li>
                    <li>
                        <h4 className="d-inline-flex">Diego Espinosa Portnoy:</h4><h4 className="text-danger d-inline-flex p-2">guitarra, voz y percusión</h4>
                    </li>
                    <li>
                        <h4 className="d-inline-flex">Jonathan Rabinovich:</h4><h4 className="text-danger d-inline-flex p-2">guitarra y voz</h4>
                    </li>
                </ul>
                
                
                
                
            </div>
                

        </Layout>
        
    )
}