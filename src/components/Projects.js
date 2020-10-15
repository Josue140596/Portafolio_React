import React from 'react';

import '../styles/projects.css';



const Projects =()=>{
    

 

    const projectsjSON = [
        {Project:{
            id: 1,
            tituloProject: 'Buscador Giff',
            imageProject: 'https://cdn.worldvectorlogo.com/logos/react.svg',
            enlace:'https://josue140596.github.io/bucadorGiff/',
            Languages: 'React',
            Date: '12/05/20',
            contentID: 'shadowReact'
            }
        },

        {Project:{
            id: 2,
            tituloProject: 'To-Do',
            imageProject: 'https://i.ibb.co/znc9CSy/Java-Script-logo-peque-o.png',
            enlace:'https://josue140596.github.io/tareas-por-hacer/',
            Languages: 'JS',
            Date: '12/07/20',
            contentID: 'shadowJS'
            }
        },
        {Project:{
            id: 3,
            tituloProject: 'Dog Finder',
            imageProject: 'https://cdn.worldvectorlogo.com/logos/react.svg',
            enlace:'https://josue140596.github.io/DogFinder_React/',
            Languages: 'React',
            Date: '12/07/20',
            contentID: 'shadowReact'
            }
        },

        {Project:{
            id: 4,
            tituloProject: 'Tienda DB',
            imageProject: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png',
            enlace:'https://github.com/Josue140596/ProductsMongoDB/blob/main/ProductsMongoDB.py',
            Languages: 'Python',
            Date: '08/10/20',
            contentID: 'shadowPython'
            }
        },
        {Project:{
            id: 5,
            tituloProject: 'Simple linear Regression',
            imageProject: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png',
            enlace:'https://github.com/Josue140596/SimpleLinearRegressionProyect/blob/main/SimpleLinearRegression.py',
            Languages: 'Python',
            Date: '10/10/20',
            contentID: 'shadowPython'
            }
        },
     
    ]
  
                   
   


    const cardsProjects = projectsjSON.map(({Project})=>{

        
           
   
        
      

        return(
          
       
            
        <div key={Project.id} href={Project.enlace} className='cardsProjects' >
        <a id="link" target='_blank' rel="noopener noreferrer"  href={Project.enlace}>
        <h1 className='tituloProjects' >{Project.tituloProject}</h1>
  
         <img className='ImageProject'  src={Project.imageProject} alt='logoReact'/>
  
        <div  key={Project.id} className='shadowProjects' id={Project.contentID} >

            <p className='infoProjects' key={Project.id}>
            Languages: {Project.Languages}
            <br />
    
                Date: {Project.Date}
             </p>
                </div>
                </a>
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