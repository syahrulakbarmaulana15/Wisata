import React, {useEffect} from 'react'
import './footer.css'
import './footer.scss'
import video from '../../Assets/video.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTour} from 'react-icons/md'
import {FaInstagram} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa6'
import {FaFacebookF} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import {GiDetour} from 'react-icons/gi'
import {MdOutlinePayment} from 'react-icons/md'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    // Animasi
        useEffect(()=> {
            
                Aos.init({duration: 2000})
            
            }, [])

    return (
        <section className='footer'>
            <div className="videoDiv">
                <video src={video} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                        <div data-aos="fade-up" className="text">
                            <small>KEEP IN TOUCH</small>
                            <h2>Bintang 3 Firdaus With us Gowistiket</h2>
                        </div>

                        <div className="inputDiv flex">
                            <input data-aos="fade-up" type="text" placeholder='Enter Email Addres'/>
                            <button data-aos="fade-up" className='btn flex' type='submit'>
                                SEND <FiSend className="icon"/>
                            </button>
                        </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="" className='logo flex'>
                                <MdOutlineTour className="icon"/>Gowistiket
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            adalah platform digital berbasis web yang memudahkan masyarakat dalam melakukan pemesanan tiket wisata secara online.
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <FaInstagram className="icon"/>
                            <FaTiktok className="icon"/>
                            <FaFacebookF className="icon"/>
                        </div>

                        <div className="footerLinks grid">
                            
                            {/* Group One */}
                            <div data-aos="fade-up" className="linkGroup">
                                <span className="groupTitle">
                                    OUR AGENCY
                                </span>

                                <li className="footerList flex">
                                    <FiChevronRight className='icon'/>
                                    Service
                                </li>

                                <li className="footerList flex">
                                    <GiDetour className='icon'/>
                                    Tourism
                                </li>

                                <li className="footerList flex">
                                    <MdOutlinePayment className='icon'/>
                                    Payment
                                </li>

                            </div>

                            {/* Group Two */}
                            <div data-aos="fade-up" className="linkGroup">
                                <span className="groupTitle">
                                    Parnert
                                </span>

                                <li className="footerList flex">
                                    <FiChevronRight className='icon'/>
                                    Destinasi
                                </li>

                                <li className="footerList flex">
                                    <GiDetour className='icon'/>
                                    Gowistiket
                                </li>

                                <li className="footerList flex">
                                    <MdOutlinePayment className='icon'/>
                                    Booking
                                </li>

                            </div>

                         
                        </div>
                    </div>

                    
                        <div className="footerDiv">
                            <small>Gowistiket Website</small>
                            <small> Copyrights Reserved - I PUSH SERVICE 2025</small>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Footer