import React, {useEffect} from 'react'
import './home.css'
import './home.scss'
import video from '../../Assets/video.mp4'
import {GrLocation} from 'react-icons/gr'
import {MdDateRange} from 'react-icons/md'
import {HiFilter} from 'react-icons/hi' 
import {FiFacebook} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    // Animasi

    useEffect(()=> {
    
        Aos.init({duration: 2000})
    
    }, [])

    return (
        <section className='home'>
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                   
                    <span data-aos="fade-up" className="smallText">
                        Our Packages
                    </span>
                   
                    <h1 data-aos="fade-up" className="homeTitle">
                        Search Your Destinasi
                    </h1>


                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search Your Destinasi</label>
                        <div className="input flex">
                            <input type="text" placeholder='Enter name destinasi'/>
                            <GrLocation className="icon"/>
                        </div>
                    </div>  

                    {/* <div className="dateInput">
                        <label htmlFor="date">Select your date</label>
                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>  */}

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max Price:</label>
                            <h3 className="total">Rp. 35.000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="35.000" min="10.000"/>
                        </div>
                    </div> 

                    <div className="searchOptions flex">
                        <HiFilter className="icon"/>
                        <span>MORE FILTERS</span>
                    </div>
                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon"/>
                        <FaInstagram className="icon"/>
                    </div>
                    <div className="leftIcons">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home