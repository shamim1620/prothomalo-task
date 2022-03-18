import React from 'react';

const TopNews = ({ topNews }) => {
    const { title, description, photo } = topNews;
    return (
        <div className='top-news'>
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div>
                <img src={photo} alt=""></img>
            </div>
        </div>
    );
};

export default TopNews;