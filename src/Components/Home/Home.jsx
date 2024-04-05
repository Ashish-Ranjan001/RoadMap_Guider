import React, { useEffect}from 'react'
import './home.css'
import video from '../../Assets/video.mp4.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
       Aos.init({duration:2000})
  }, [])


    return (
        <section className='home'>
            <div className='overlay'></div>
            <video src={video} muted autoPlay loop type="video.mp4/mp4"></video>

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

                <div data-aso='fade-up' className='cardDiv grid'>
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
}

export default Home