import React from "react";
import python12 from "../../Assets/python12.jpg"

const Template = () => {}

return (
    <section className='home'>
        <div className='overlay'></div>
        <img src={python12}></img>

        <div className='homeContent container'>
            <div className='textDiv'>

                <span data-aso='fade-up'
                className='smallText'>
                    Career Guidance
                </span>

                <h1 data-aso='fade-up'
                className='homeTitle'>
                    Search your  Interst
                </h1>

            </div>

            <div data-aso='fade-up'
            className='cardDiv grid'>
                <div className='intrestInput'>
                    <label htmlFor='interst'>
                        Search your Interest:</label>
                    <div className='input'>
                        <input  type="text" placeholder='Enter field here......' />
                    </div>
                </div>

                
            </div>
        </div>
    </section>
)


export default Template