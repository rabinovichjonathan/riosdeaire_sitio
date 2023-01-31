import Layout from "../layout/Layout"
import Swal from "sweetalert2"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"



export default function Contacto() {
    
    const router = useRouter()
    
    const[nombre, setNombre] = useState('')
    const[mail, setMail] = useState('')
    const[mensaje, setMensaje] = useState('')

    const handleChangeNombre = e => {
        e.preventDefault()
        setNombre(e.target.value)
    }

    
    const handleChangeMail = e => {
        e.preventDefault()
        setMail(e.target.value) 
    }

    const handleChangeMensaje = e => {
        e.preventDefault()
        setMensaje(e.target.value)
    }

    const validarFormulario = async e => {
        e.preventDefault()
        const validRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        if(!validRegex.test(mail)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El usuario ingresado no tiene un formato mail válido!',
                footer: '<a href="">Prueba nuevamente</a>',
                timer: 2000
              })
            return
        }

        if(mail === '' || mensaje === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes ingresar email y mensaje obligatoriamente!',
                footer: '<a href="">Prueba nuevamente</a>',
                timer: 2000
              })
            return
        }else{
           try {
                const { data } = await axios.post('/api/mensajes', {mail, mensaje, nombre})
                console.log(data)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Tu mensaje ha sido enviado. Te responderemos a la brevedad. Muchas gracias!',
                    showConfirmButton: false,
                    timer: 4000
                })

                axios.defaults.headers.post['Content-Type'] = 'application/json';
                axios.post('https://formsubmit.co/ajax/rabinovichjonathan@gmail.com', {
                    name: nombre,
                    email: mail,
                    message: mensaje
                })
                    .then(response => console.log(response))
                    .catch(error => console.log(error));

                setMail('')
                setMensaje('')
                setNombre('')

                setTimeout(()=>{
                    router.push('/listado')
                }, 3000)
           } catch (error) {
                console.log(error)
           }
            
        }    
        
           
    }

   
    return(
        <Layout
            title="Contacto"
        >
        <div className="contenedorCanciones">
                
                <h1>Contacto</h1>
                <h3>Dejanos un mensaje</h3>
                <h3>Te contestaremos a la brevedad</h3>
                
                <form className="row d-flex justify-content-center" type="submit" action="https://formsubmit.co/rabinovichjonathan@gmail.com" method="POST" onSubmit={validarFormulario}>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="usr">Nombre:</label>
                            <input type="text" className="form-control" name="nombre" id="usr" onChange={handleChangeNombre}/>
                        </div>
                        <div class="form-group">
                            <label for="pwd">Email:</label>
                            <input type="mail" className="form-control" name="mail" id="pwd" onChange={handleChangeMail} />
                        </div>
                        <div class="form-group">
                            <label for="comment">Mensaje:</label>
                            <textarea className="form-control" rows="5" name="mensaje" id="comment" onChange={handleChangeMensaje}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Enviar</button>
                    </div>
                        
                </form>
        </div>   
                
                
        </Layout>
        
    )
}