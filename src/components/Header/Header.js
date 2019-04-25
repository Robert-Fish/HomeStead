import React from 'react';
import Navbar from '../Navbar/Navbar';

export default function Header() {
  return (
    <div className="HeaderCont">
      <Navbar />
      <p className="HeaderText">
        Buy and Sell <br /> your property in <br /> one place!
      </p>
    </div>
  );
}
