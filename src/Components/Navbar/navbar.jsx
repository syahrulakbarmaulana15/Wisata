import React, {useState} from 'react'
import './navbar.css'
import './navbar.scss'
import {MdOutlineTour} from 'react-icons/md'
import {IoIosCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    // Function to toggle navBar
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }
    // Function to remove navBar
    const removeNavbar = ()=>{
        setActive('navBar')
    }

    return (
        <section className="navBarSection">
            <header className="header flex">

                <div className="logoDiv">
                    <a href="" className="logo">
                        <h1><MdOutlineTour className="icon"/>Gowistiket</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="" className="navLink">Contact Us</a>
                        </li>
                        
                        <button className='btn'>
                            <a href="#">Cart</a>
                        </button>
                        </ul>
                        
                        <div onClick={removeNavbar} className="closeNavbar">
                            <IoIosCloseCircle className="icon"/>
                        </div>

                    
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>

            </header>
        </section>
    )
}

export default Navbar