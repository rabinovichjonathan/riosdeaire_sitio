import Link from "next/link"


const Footer = () => {
    
    
    return(
       <>
        <div className="p-3 mb-2 bg-light text-grey mt-5 shadow p-3 rounded">
            <div className="iconos inline-flex ">
                <a target="_blank" href=""><i className="bi bi-whatsapp"></i></a>
                <a target="_blank" href="https://www.instagram.com/riosdeairemusica/"><i className="bi bi-instagram"></i></a>
                <a target="_blank" href=""><i className="bi bi-facebook"></i></a>
            </div>
            <p className="text-center">Derechos reservados</p>
            <hr></hr>
            <div className="derechos">
                <p className="text-center">©2023 Ríos de aire</p>
            </div>
            
            
        </div>
           
       </>
       
    )
    
}
export default Footer






