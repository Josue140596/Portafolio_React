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
                        <img src={linkedinIconWhite} alt='linkedin' />
                    
                    
                        <img src={githubIconWithe} alt='github' />
                    
                    
                        <img src={facebookIconWhite} alt='facebook' />
                    
                    
                        <img src={twitterIconWhite} alt='twitter' />
                </div> 
            </div>
        
        </div>
    )
}


export default Contact;