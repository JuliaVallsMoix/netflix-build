import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <header className='banner' style={{
        backgroundSize: 'cover',
        backgroundImage: `url('')`,
        backgroundPosition: 'center center',
    }}>
      <div className='banner__contents'>
        <h1 className='banner__title'>Movie Name</h1>
        <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>

        </div>
        <h2 className='banner__description'>This is a test description</h2>
      </div>
      <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner;
