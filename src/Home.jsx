import React from 'react';
import { FaBars } from 'react-icons/fa';
const Home = () => {
  return (
    <>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">show modal</button>
    </>
  );
};

export default Home;
