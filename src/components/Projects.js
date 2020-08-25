import React, { useState } from 'react';

import '../styles/projects.css';



const Projects =()=>{

    const [state, setstate] = useState({})

    const upInfoProjects = ()=>{
      
        setstate({
            top :  '30%'
            }    
        )
       
    }
    const downInfoProjects =()=>{
        setstate({
            top :  '100%'
            }    
        )
    }

   

    return(

        <div className= 'Projects'>
            <h1 className='titleProjects'>Projects</h1>

            <div className='contentProjects'>
                <div className='cardsProjects' onMouseOver={upInfoProjects} onMouseLeave={downInfoProjects}>
                <h1 className='tituloProjects' >Buscador Giff</h1>

                    <img className='ImageProject'  src='https://cdn.worldvectorlogo.com/logos/react.svg' alt='logoReact'/>
                
                <div className='shadowProjects'style={state}>
                    <p className='infoProjects'>
                    Languages: React
                    <br />
                    
                    Date: 12/05/20
                    </p>
                </div>
               
                
                </div>
                <div className='cardsProjects'>
                
                </div>
                <div className='cardsProjects'>
                
                </div>
                <div className='cardsProjects'>
                
                </div>
            
            </div>

        </div>
    )



}



export default Projects;