import React from 'react'
import './app.css'
import withSplashScreen from "./Components/withSplashScreen" // Include this line
import Navbar from './Components/Navbar/navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
// import Footer from './Components/Contact/Contact'
import Cart from './Components/Cart/Cart'
import Main from './Components/Main/main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
    return (       
        <BrowserRouter>
        <Navbar/>
        <Main/>
            <Routes>
            
                
                <Route path='/' component= {<Home />}/>
                {/* <Route path='/contact' Component= {Contact}/> */}
                <Route path='/cart' component= {<Cart />}/>
                
            
            </Routes>
        <Footer/>
        </BrowserRouter>
            );
}


export default withSplashScreen(App)