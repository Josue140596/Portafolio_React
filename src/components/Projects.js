import React, { useState } from 'react';

import '../styles/projects.css';



const Projects =()=>{

    const [state, setstate] = useState({})

    const upInfoProjects = (e)=>{
        
      
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

    const projectsjSON = [
        {Project:{
            id: 1,
            tituloProject: 'Buscador Giff',
            imageProject: 'https://cdn.worldvectorlogo.com/logos/react.svg',
            Languages: 'React',
            Date: '12/05/20',
            colorShadow: {
                background: 'red'
                }
            }
        },

        {Project:{
            id: 2,
            tituloProject: 'To-Do',
            imageProject: 'https://cdn.worldvectorlogo.com/logos/react.svg',
            Languages: 'JS',
            Date: '12/07/20',
            colorShadow: {
                background: 'red'
                }
            }
        }
    ]
 

    const cardsProjects = projectsjSON.map(({Project})=>{

        return( <div key={Project.id} className='cardsProjects' onMouseOver={upInfoProjects} onMouseLeave={downInfoProjects}>
        <h1 className='tituloProjects' >{Project.tituloProject}</h1>
  
        <img className='ImageProject'  src={Project.imageProject} alt='logoReact'/>
  
        <div  key={Project.id} className='shadowProjects' style={state}>

            <p className='infoProjects'>
            Languages: {Project.Languages}
            <br />
    
                Date: {Project.Date}
             </p>
                </div>
        </div>
        )
    })
        
    

   

    return(

        <div className= 'Projects'>
            <h1 className='titleProjects'>Projects</h1>

            <div className='contentProjects'>

            {cardsProjects}






               
               
            
            </div>

        </div>
    )



}



export default Projects;