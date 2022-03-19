import React, { useState, useEffect } from 'react';
import logo from '../../image/prothomalo-logo.png';
import '../../styles/Home.css';
import Card from '../Card/Card';
import nogod from '../../image/nogod-ads.PNG'
import rupayan from '../../image/rupayan-ads.PNG';


const Home = () => {

    const [data, setData] = useState([]);

    //fetch data from json file
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setData(data)

            })
    }, [])
    //data divide by sort priority
    const topNewsFirst = data.find(({ sort }) => sort=== 1);
    const topNewsSecond = data.find(({ sort }) => sort === 2)
    const secondRowNews = data.filter(({ sort }) => sort > 2 && sort < 6);
    const thirdNews = data.filter(({ sort }) => sort > 5 && sort < 12);

    

    return (
        <div>
            <div className='header'>
                <img src={logo} alt="logo"></img>
            </div>
            <div className='container'>

                <div className='main-section'>
                    <div className='row'>
                        <div className='top-news'>
                            {
                                topNewsFirst && <>
                                    <h1>{topNewsFirst.title}</h1>
                                    <p>{topNewsFirst.description.substring(0, 100)} ...</p>
                                    <time>{topNewsFirst.time}</time>
                                </>
                            }
                        </div>
                        <div className='top-news'>
                            {
                                topNewsFirst && <img src={topNewsFirst.photo} alt=""></img>
                            }
                        </div>

                        <div>
                            {
                                topNewsSecond && <>
                                    <h4>{topNewsSecond.title}</h4>
                                    <p>{topNewsSecond.description.substring(0, 100)} ...</p>
                                    <time>{topNewsSecond.time}</time>
                                </>
                            }
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        {
                            secondRowNews.map(news => <>
                                <div>
                                    <h4>{news.title}</h4>
                                    <p>{news.description.substring(0, 100)} ...</p>
                                    <time>{news.time}</time>
                                </div>
                            </>)
                        }
                    </div>
                    <hr />
                    <div className='row'>
                        {
                            thirdNews.slice(0, 3).map(news => <Card
                                news={news}
                                key={news.id}
                            ></Card>)

                        }
                    </div>
                    <hr />
                    <div className='row'>
                        {
                            thirdNews.slice(3, 6).map(news => <Card
                                news={news}
                                key={news.id}
                            ></Card>)

                        }
                    </div>
                </div>
                <div className='side-section'>
                    <div className='top-right-ads'>
                        <img src={nogod} alt=''></img>
                    </div>
                    
                    <div>

                    </div>
                </div>
            </div>
            <div className='bottom-ads'>
                <img src={rupayan} alt=""></img>
            </div>
            <hr />
        </div >
    );
};

export default Home;