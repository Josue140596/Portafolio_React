import React from 'react';
import Menu from './Menu';
import ContentMain from './ContentMain';

// // Imagenes
// import background from '../img/backcss.png';

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

        background : 'linear-gradient(to right, rgba(250,250,250,1) 0%, rgba(250,250,250,1) 50%, rgba(130,130,130,1) 50%, rgba(130,130,130,1) 100%)',
        backgroundRepeat : 'no-repeat',
        backgroundSize: 'cover'

    }
 
    
    
    return(
        <div className='principal' style={PrincipalStyle}  >
            <div className='header'>
                <ul className='nav'>
                    <li>
                        <a  href='https://www.linkedin.com/in/bryan-s%C3%A1nchez-rodr%C3%ADguez-82b29b1a9' rel="noopener noreferrer" target='_blank'>
                            <div className='linkedin'>
                                <div className= 'linkedinIconBlack'>
                                    <img src={linkedinIconBlack} alt='linkedinIconBlack'/>
                                </div>
                                <div className='linkedinIconWhite'>
                                    <img src={linkedinIconWhite} alt='linkedinIconWhite' />
                                </div>
                            </div> 
                        </a>
                     </li>


                    <li>
                        <a href='https://github.com/Josue140596' rel="noopener noreferrer" target='_blank'>
                         <div className='github'>
                                <div className='githubIconBlack'>
                                   <img  src={githubIconBlack} alt='githubIconBlack'/>
                                 </div>
                                 <div className='githubIconWhite'>
                                    <img  src={githubIconWithe} alt='githubIconWhite'/>
                                </div>
                        </div>
                        </a>
                        
                    
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
        
        
            <div style={{overflow: "auto"}}>
                <Menu />

                <ContentMain />
            
            </div>
        
    
        </div>
    )


}



export default Principal;