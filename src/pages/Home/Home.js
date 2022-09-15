import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
 import classes from './Home.module.css'
import HomeMain from './HomeMain/HomeMain';
const Home = () => {
  return (
    <div className={`min-hv-100 ${classes.home}`}>
      {/* <Navbar/> */}
      <HomeMain/>
      <Footer/>
    </div>
  );
};

export default Home;