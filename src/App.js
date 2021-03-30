import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Products from './component/Products';
import About from './component/About';
import Contact from './component/Contact';
import {css} from "@emotion/core";
import PropagateLoader from 'react-spinners/PropagateLoader';


function App() {

    const [loading, setLoading] = useState(false);
    const override = css
        `display:block;
        border-color:red;
        margin-bottom:20%;
        margin-left:50%`;

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])
    return (
        <div className='App' >
            {
                loading ? <PropagateLoader color={"#3d1425"} loading={loading} css={override} size={40} />
                    :
                    <>
                        <Navbar />
                        <Header/>
                        <Products/>
                        <About/>
                        <Contact/>
                    </>
            }
        </div >
    )
}

export default App;