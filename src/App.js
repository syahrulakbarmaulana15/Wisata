import React from 'react'
import './app.css'
import withSplashScreen from "./Components/withSplashScreen" // Include this line
import Navbar from './Components/Navbar/navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/main'


const App = () => {
    return (
        <>
            <Navbar/>
            <Home/>
            <Main/>
            <Footer/>
        </>
    )
}


export default withSplashScreen(App)