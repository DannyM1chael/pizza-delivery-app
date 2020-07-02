import React from 'react';

export default function Banner() {
  const sliderImg = process.env.PUBLIC_URL + 'assets/img/bg.png';
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
      }}>
      <img src={sliderImg} alt="discount" />
    </div>
  );
}
