import React from 'react';


const  Menu = () =>{

  

    const scrollAbout = ()=>{
        window.scroll({
            top: 600,
            behavior: 'smooth'
          });
    }
    const scrollProjects = ()=>{
        window.scroll({
            top: 1200,
            behavior: 'smooth'
          });
    }
    const scrollContact = ()=>{
        window.scroll({
            top: 8000,
            behavior: 'smooth'
          });
    }

   
    return(

        <div className='Menu'>
            <div className="menuitem" onClick={scrollAbout}>About.. <div className='underlying'></div></div>
            <div className="menuitem" onClick={scrollProjects}>Projects<div className='underlying'></div></div>
            <div className="menuitem" onClick={scrollContact}>Contact<div className='underlying' ></div></div>
           
            <p className='textMain'>The most Practice most learn</p>
            
        </div>
    )


}



export default Menu;