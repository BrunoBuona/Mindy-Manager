import notFound from '../assets/notFound.png'
import './NotFound.css'
import { Link } from 'react-router-dom'
export default function NotFound(){
    return(
        <div id='background'>
            <h1>Nuestros agentes concluyeron <br /> con que esta pagina no existe 😴</h1>
            <img src={notFound} alt="This Page doesnt Exist. Error 404." />
            <button className='button-89'><Link className='text-btn89' to='/'>Volver al Inicio</Link></button>
        </div>
    )

}