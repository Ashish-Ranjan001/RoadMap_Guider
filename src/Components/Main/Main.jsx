import React from "react";
import './main.css'

import aws from '../../Assets/aws.png'
import c from '../../Assets/c.png'
import java from '../../Assets/java.png'
import js from '../../Assets/js.png'
import python from '../../Assets/python.jpg'
import cplusplus from '../../Assets/cplusplus.png'

const Data =[
  {
    id:1,
    imgSrc:aws,
    description: 'AWS'
  },

  {
    id:2,
    imgSrc:c,
    description: 'C'
  },

  {
    id:3,
    imgSrc:js,
    description: 'JavaScript'
  },

  {
    id:4,
    imgSrc:java,
    description: 'Java'
  },

  {
    id:5,
    imgSrc:python,
    description: <a href="language\Python.html">Python</a>

  },

  {
    id:6,
    imgSrc:cplusplus,
    description: 'c++'
  },
  
]
const Main =() =>{
  return(
    <section className="main container section">
        <div className="secTitle">
           <h3 className="title">
             Most Searched Fields
           </h3>
        </div>
        
        <div className="seeContent grid ">
          {
            Data.map(({id ,imgSrc ,description})=>{
               return(
                    <div key={id} className="singleDestination">
                        <div className="imageDiv">
                          <img src={imgSrc} alt={description} />
                        </div>

                        <div className="cardInfo">
                           <h4 className="description">{description} </h4>
                        </div>

                   
                    </div>
                  
               )

            })

          }
        
        </div>
    </section>
  )
}

export default Main