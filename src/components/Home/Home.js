import React, { useState } from 'react';
import logo from '../../prothomalo-logo.png';
import '../../styles/Home.css'

const Home = () => {
    const [data, setData] = useState();


    fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))

    return (
        <div>
            <div className='header'>
                <img src={logo} alt="logo"></img>
            </div>
            <div className='row'>
                <div>

                </div>

            </div>

        </div>
    );
};

export default Home;