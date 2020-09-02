import React from 'react';
import '../styles/contact.css';


// imagenes

import linkedinIconWhite from '../img/linkedin-blanco.png';
import githubIconWithe from '../img/github.png';
import facebookIconWhite from '../img/F-blanco.png';
import twitterIconWhite from '../img/T-blanco.png';

const Contact= ()=>{



    return(
        <div className='Contact'>
            <h1 className='ContactTitle'>Contact</h1>
            <div className='contentContact'>
                <p className='textContact'>Si tienes alguna pregunta acerca de mi o quieres contactarme,
                 te invito a que entres a las siguientes enlaces: </p>
                <div className='ContentImagesContact'>

                    <a  href='https://www.linkedin.com/in/bryan-s%C3%A1nchez-rodr%C3%ADguez-82b29b1a9' rel="noopener noreferrer" target='_blank'>
                        <img src={linkedinIconWhite} alt='linkedin' />
                    </a>
                    
                    <a href='https://github.com/Josue140596' rel="noopener noreferrer" target='_blank'>
                        <img src={githubIconWithe} alt='github' />
                    </a>
                    
                    
                        <img src={facebookIconWhite} alt='facebook' />
                    
                    
                        <img src={twitterIconWhite} alt='twitter' />
                </div> 
            </div>
        
        </div>
    )
}


export default Contact;