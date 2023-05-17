import React from 'react'
import "./home.css"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Featured from "../components/Featured"
import PropertyList from "../components/PropertyList"
import FeaturedProperty from '../components/FeaturedProperty'
import MailList from '../components/MailList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
      <h1 className="homeTitle">Explore India</h1>
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1> 
        <FeaturedProperty/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;