import React from 'react';

// Imagenes
import background from '../img/background.png';

// icons
import linkedinIconBlack from '../img/linkedin-negro.png';
import linkedinIconWhite from '../img/linkedin-blanco.png';
import githubIconWithe from '../img/github.png';
import githubIconBlack from '../img/githubBlack.png';
import facebookIconBlack from '../img/F-negro.png';
import facebookIconWhite from '../img/F-blanco.png';
import twitterIconBlack from '../img/T-negro.png';
import twitterIconWhite from '../img/T-blanco.png';


const Principal = () =>{

  
    const PrincipalStyle = {

        backgroundImage : `url('${background}')`,
        backgroundRepeat : 'no-repeat',
        backgroundSize: 'cover'

    }
 
    
    
    return(
        <div className='principal' style={PrincipalStyle}  >
            <div className='header'>
                <ul className='nav'>
                    <li>
                        <div className='linkedin'>
                            <div className= 'linkedinIconBlack'>
                                <img src={linkedinIconBlack} alt='linkedinIconBlack'/>
                            </div>
                            <div className='linkedinIconWhite'>
                                <img src={linkedinIconWhite} alt='linkedinIconWhite' />
                            </div>
                        </div> 
                     </li>


                    <li>
                        <div className='github'>
                            <div className='githubIconBlack'>
                                <img  src={githubIconBlack} alt='githubIconBlack'/>
                            </div>
                            <div className='githubIconWhite'>
                                 <img  src={githubIconWithe} alt='githubIconWhite'/>
                            </div>
                        </div>
                    
                    </li>
                    <li>
                        <div className='facebook'>
                            <div className='facebookIconBlack'>
                                <img  src={facebookIconBlack} alt='facebookIconBlack'/>
                            </div>
                            <div className='facebookIconWhite'>
                                 <img  src={facebookIconWhite} alt='facebookIconWhite' />
                            </div>
                        </div>
                    
                    </li>
                    <li>
                        <div className='twitter'>
                            <div className='twitterIconBlack'>
                                <img  src={twitterIconBlack} alt='twitterIconBlack'/>
                            </div>
                            <div className='twitterIconWhite'>
                                 <img  src={twitterIconWhite} alt='twitterIconWhite' />
                            </div>
                        </div>
                    
                    </li>

                   
                
                </ul>
            </div>
        </div>
    )


}



export default Principal;