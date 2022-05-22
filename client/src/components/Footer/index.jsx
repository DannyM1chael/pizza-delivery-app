import React from 'react';
import ScrollBtn from '../ScrollBtn';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <ScrollBtn />
        <div className="col text-center pt-4">
          <h4>Denis Mikhalev &copy;</h4>
          <p>Full Stack Web Developer</p>
          <p>Telegram: @DannyM1chael</p>
        </div>
      </div>
    </div>
  );
}
