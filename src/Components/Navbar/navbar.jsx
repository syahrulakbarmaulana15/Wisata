import React, {useState} from 'react'
import './navbar.css'
import './navbar.scss'
import {MdOutlineTour} from 'react-icons/md'
import {IoIosCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'
import { Link } from 'react-router-dom';

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

                            <Link to="/" className="navLink">Home</Link>
                            
                        </li>

                        <li className="navItem">
                            
                            <Link to="" className="navLink">Contact Us</Link>
                            
                        </li>
                        
                        <button className='btn'>
                            
                            <Link to="/cart">Cart</Link>
                            
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