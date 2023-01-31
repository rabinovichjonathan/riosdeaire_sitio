import Image from 'next/image'
import Link from 'next/link'



const Header = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" href='/listado'>Home</Link>
                        <Link className="nav-item nav-link" href="/sobreNosotros">Sobre Nosotros</Link>
                        <Link className="nav-item nav-link" href='/discografia'>Canciones</Link>
                        <Link className="nav-item nav-link" href="/contacto">Contacto</Link>
                    </div>
                </div>
            </nav>
            <div className='text-center mt-3'>
                <h1>Ríos de aire</h1>
                <div className="bg-warning mb-4">
                    <h4>Música rioplatense</h4>
                </div>
               
            </div>
            
            
        </>
    )
}

export default Header