import React, { useState } from 'react';
import arrowUp from '../img/arrowUp.png';
import '../styles/arrowUp.css';

const ArrowUp = ()=>{

    const [state, setstate] = useState({})
        window.onscroll = ()=> {
            let scroll = window.scrollY
              if ( scroll <= 240){
                    setstate (
                        {
                          opacity: '0%',
                          
                        }) 
              }
              if ( scroll >= 250 && scroll <= 490){
                    setstate (
                        {
                            opacity: '50%',
                           
                        }) 
              }

              if ( scroll >= 590){
                    setstate (
                        {
                            opacity: '0%'
                        }) 
              }
              if ( scroll >= 770){
                    setstate (
                        {
                            opacity: '50%'
                        }) 
              }
              if ( scroll >= 1000){
                    setstate (
                        {
                            opacity: '0%'
                        }) 
              }
              if ( scroll >= 1100 && scroll <= 1200){
                    setstate (
                        {
                            opacity: '50%'
                        }) 
              }
              if ( scroll >= 1420){
                    setstate (
                        {
                            opacity: '50%'
                        }) 
                      
              }
            
          
          console.log(scroll);
          };

          const scroll0 = ()=>{
            window.scroll({
                top: 0,
                behavior: 'smooth'
              });
        }




    


    return(
        <div className='arrowContent' style={state} onClick={scroll0}>
            <img className='imgArrow' src={ arrowUp } alt='ArrowUp'/>
        </div>
    )
}


export default ArrowUp;