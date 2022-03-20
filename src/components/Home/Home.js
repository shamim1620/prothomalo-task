import React, { useState, useEffect } from 'react';
import logo from '../../image/prothomalo-logo.png';
import '../../styles/Home.css';
import Card from '../Card/Card';
import nogod from '../../image/nogod-ads.PNG'
import rupayan from '../../image/rupayan-ads.PNG';
import newspaper from '../../image/newspaper.PNG';
import Moment from 'react-moment';
import 'moment/locale/bn-bd';



const Home = () => {

    const [data, setData] = useState([]);

    //fetch data from json file
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                data.sort((x, y) => x.sort - y.sort);
                setData(data)


            })
    }, [])
    //data finde by sort priority
    const topNewsFirst = data.find(({ sort }) => sort === 1);
    const topNewsSecond = data.find(({ sort }) => sort === 2)



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
                                    <small>
                                        <Moment format="lll" locale='bn-bd'>
                                            {topNewsFirst.time}
                                        </Moment>
                                    </small>
                                </>
                            }
                        </div>
                        <div className='top-news'>
                            {
                                topNewsFirst && <img src={topNewsFirst.photo} alt=""></img>
                            }
                        </div>

                        <div className='second-top-news'>
                            {
                                topNewsSecond && <>
                                    <h4>{topNewsSecond.title}</h4>
                                    <p>{topNewsSecond.description.substring(0, 100)} ...</p>
                                    <small>
                                        <Moment format="lll" locale='bn-bd'>
                                            {topNewsSecond.time}
                                        </Moment>
                                    </small>
                                </>
                            }
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        {
                            data.slice(2, 5).map(news => <>
                                <div>
                                    <h4>{news.title}</h4>
                                    <p>{news.description.substring(0, 100)} ...</p>
                                    <small>
                                        <Moment format="lll" locale='bn-bd'>
                                            {news.time}
                                        </Moment>
                                    </small>
                                </div>
                            </>)
                        }
                    </div>
                    <hr />
                    <div className='row'>
                        {
                            data.slice(5, 8).map(news => <Card
                                news={news}
                                key={news.id}
                            ></Card>)

                        }
                    </div>
                    <hr />
                    <div className='row'>
                        {
                            data.slice(8, 11).map(news => <Card
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

                    {
                        data.slice(11, 12).map(news => <div className='right-colum-news'>
                            <img src={news.photo} alt=""></img>
                            <h4>{news.title}</h4>

                        </div>)

                    }
                    {
                        data.slice(12).map(news => <Card
                            news={news}
                            key={news.id}
                        ></Card>)
                    }
                    <div className='today-newspaper'>
                        <h4>ছাপা কাগজের মতো পড়ুন আজকের প্রতিকা</h4>
                        <img src={newspaper} alt="newspaper"></img>

                    </div>
                </div>
            </div>
            <div className='bottom-ads'>
                <img src={rupayan} alt=""></img>

            </div>

            <footer>
                <hr />
                <small>স্বত্ব © ২০২২ প্রথম আলো |
                    সম্পাদক ও প্রকাশক: মতিউর রহমান</small>
            </footer>
        </div >
    );
};

export default Home;