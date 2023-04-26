import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_nwmghyt', 'template_gw6tnnh', form.current, 'yG6LbvFiLmjQJpbuV')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <div className='text-zone'>
                    </div>
                    
                    <div className='map-wrap'>
                        <MapContainer center={[35.2271, -80.8431]} zoom={13}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={[35.2271, -80.8431]}>
                                <Popup>Justin lives here, lets grab a coffee!</Popup>
                            </Marker>
                        </MapContainer>

                    </div>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Feel free to contact me with any questions and I will reply as soon as possible! Please dont hesitate using the form below.
                    </p>
                    <p>Justin Moran
                    <br />
                    Charlotte
                    <br />
                    North Carolina
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact