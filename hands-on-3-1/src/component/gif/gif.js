import React from 'react';

function Gif({title, url}) {
    return (
        <>
            <div className="image">
                <h1>{title}</h1>
                <img src={url} className='img' alt="From Giphy"></img>
            </div>
        </>
    )
}

export default Gif;