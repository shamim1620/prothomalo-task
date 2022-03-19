import React from 'react';
import '../../styles/TopNews.css'

const TopNews = ({ topNewsFirst }) => {
    const { title, description, photo, time } = topNewsFirst;
    return (
        <div className='top-news'>
            <div>
                <h4>{title}</h4>
                <p>{description.substring(0, 100)} ...</p>
                <time>{time}</time>
            </div>
            <div>
                <img src={photo} alt=""></img>
            </div>
        </div>
    );
};

export default TopNews;