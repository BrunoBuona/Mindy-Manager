import './Landing.css'
import { Link } from 'react-router-dom'
import banner from '../assets/Banner.jpg'
import { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
export default function Landing() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    let xgeol = "23MH04"

    const name = useRef("")
    const lastName = useRef("")
    const role = useRef("alumno")
    const cohort = useRef("FS-99")
    const email = useRef("")
    const discordTag = useRef("")
    const strikes = useRef(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name.current.value,
            lastName: lastName.current.value,
            role: role.current,
            cohort: cohort.current,
            email: email.current.value,
            discordTag: discordTag.current.value,
            strikes: strikes.current,
        }
        axios.post('http://localhost:8000/api/user/', data)
            .then(res => {
                console.log("Exito en la petición")
            })
            .catch(err => {
                console.log(err)
            }
            )
    }
    return (
        <>
            <div className='background'>
                <div className='card-design'>
                    <div className='card-top'>
                        <img className='top-image' src={banner} alt="card-top" />
                    </div>
                    <div className='card-content'>
                        {
                            show
                                ?
                                <>
                                    <div className='Section-1'>
                                        <label htmlFor="">
                                            Nombre<span className='red'>*</span>
                                            <input ref={name} className='hs-form__field__input' type="text" />
                                        </label>
                                        <label htmlFor="">
                                            Apellido<span className='red'>*</span>
                                            <input ref={lastName} className='hs-form__field__input' type="text" />
                                        </label>
                                    </div>
                                    <div className='Section-2'>
                                        <label htmlFor="">
                                            Correo Electronico<span className='red'>*</span>
                                            <input ref={email} className='hs-form__field__input' type='email' placeholder='tuCorreo@mail.com' />
                                        </label>
                                        <label htmlFor="">
                                            Discord Tag<span className='red'>*</span>
                                            <input ref={discordTag} className='hs-form__field__input' placeholder='Ejemplo: CotiLeon#4920' type="text" />
                                        </label>
                                        <div className='btn-sender'>
                                        <button onClick={handleSubmit} className='send-btnx'>Enviar</button>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div>
                                        <input id='code' className='input-form' placeholder='Tu Codigo de Alumno' type="text" />
                                        <button className='send-btn' onClick={e => {
                                            e.preventDefault();
                                            if (document.getElementById("code").value === xgeol) {
                                                setShow(true);
                                                setShow2(true)
                                                setTimeout(() => {
                                                    setShow2(false);
                                                }, 4000);
                                            }
                                            else (
                                                alert("El codigo ingresado no es correcto.")
                                            )
                                        }}>Validar</button>
                                    </div>
                                </>
                        }
                    </div>
                </div>
                <div className='card-bottom'>
                    {show2 ? <h2>El Codigo fue validado exitosamente.</h2> : null}
                </div>
            </div>
        </>
    )
}