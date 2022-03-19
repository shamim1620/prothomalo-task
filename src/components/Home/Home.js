import React, { useState, useEffect } from 'react';
import logo from '../../prothomalo-logo.png';
import '../../styles/Home.css'

import TopNews from '../TopNews/TopNews';

const Home = () => {

    const [data, setData] = useState([]);
    const [second, setSecond] = useState();
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
                const second = data.find(({ sort }) => sort === 2)
                setSecond(second);

            })
    }, [])

    const topNewsFirst = data.find(({ id }) => id === '9730adec');
    const secondNews = data.filter(({ sort }) => sort > 2 && sort < 6);


    console.log(secondNews);

    return (
        <div>
            <div className='header'>
                <img src={logo} alt="logo"></img>
            </div>
            <div className='container'>

                {/* {
                    data.map(news => <Card
                        news={news}
                        key={news.id}
                    ></Card>)
                } */}
                <div className='main-section'>
                    <div className='row'>
                        <div className='top-news'>
                            {
                                topNewsFirst && <TopNews
                                    topNewsFirst={topNewsFirst}
                                ></TopNews>
                            }
                        </div>

                        <div>
                            {
                                second && <>
                                    <h4>{second.title}</h4>
                                    <p>{second.description.substring(0, 100)} ...</p>
                                    <time>{second.time}</time>
                                </>
                            }
                        </div>
                    </div>
                    <div className='row'>
                        {
                            secondNews.map(news => <>
                                <div>
                                    <h4>{news.title}</h4>
                                    <p>{news.description.substring(0, 100)} ...</p>
                                    <time>{news.time}</time>
                                </div>
                            </>)
                        }
                    </div>
                </div>
                <div className='side-section'>2</div>
            </div>
        </div >
    );
};

export default Home;