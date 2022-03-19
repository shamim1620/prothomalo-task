import React from 'react';
import '../../styles/Card.css';

const Card = ({ news }) => {
    const { photo, title, time } = news;
    return (
        <div >
            <div className='news-card'>
                <div className='card-img'>
                    <img src={photo} alt=''></img>
                </div>
                <div>
                    <h4>{title}</h4>
                </div>
            </div>
            <time>{time}</time>
        </div>

    );
};

export default Card;