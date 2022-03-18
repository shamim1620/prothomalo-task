import React, { useState, useEffect } from 'react';
import logo from '../../prothomalo-logo.png';
import '../../styles/Home.css'
import Card from '../Card/Card';
import TopNews from '../TopNews/TopNews';

const Home = () => {
    const [data, setData] = useState([]);
    // const [topNews, setTopNews] = useState()
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    const topNews = data.find(({ id }) => id === '9730adec');
    
    console.log(topNews)
    return (
        <div>
            <div className='header'>
                <img src={logo} alt="logo"></img>
            </div>
            <div className='container'>
                <div className='top-section'>
                    {
                        topNews && <TopNews
                            topNews={topNews}
                        ></TopNews>
                    }
                </div>
                {/* <div>2</div>
                <div className='vertical-section'>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div> */}
                {
                    data.map(news => <Card
                        news={news}
                        key={news.id}
                    ></Card>)
                }
            </div>

        </div>
    );
};

export default Home;