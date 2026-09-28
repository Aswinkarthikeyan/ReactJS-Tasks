// App.jsx
import Home from './assets/component/Home'

const App = () => {
  return (<>
  <Home />
    </>
  )
}

export default App

// Home.jsx
import About from './About'
import Header from './Header'
import Footer from './Footer'
import Product_card from './Product_card'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <Header />
    <Product_card />
    <About />
    <Footer />
    </>
  )
}

export default Home


// Header.jsx
import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
    <Navbar />
    </>
  )
}

export default Header

// Navbar.jsx
import React from 'react'


const Navbar = (navdata) => {

 console.log(navdata)
  return (
    <div className="Navbarparent">
        <div className="logo">REACT</div>
        <div className="navEl">
            <a href='#'>Home</a>
            <a href='#'>About Us</a>
            <a href='#'>Contact</a>
        </div>
    </div>
  )
}

export default Navbar

// About.jsx
const About = () => {
  return (
    <div className="Aboutparent" id="About">
      <Aboutcontent1 />
      <Aboutcontent2 />
      <Aboutcontent3 />
    </div>
  )
}

export default About

const Aboutcontent1 = ()=>{
  return (
    <div className="section1"><div className="secA"><h2>Who are we?</h2></div>
      <div className="secB">We, ServeEase, a digital Platform which connects Customers to the Skilled Professionals</div></div>
  )
}

const Aboutcontent2 = ()=>{
  return (
    <div className="section2"><div className="SecC"><h2>What we do?</h2></div>
      <div className="secD">We help the professionals and customers find each other in our web application for their service.</div></div>
  )
}

const Aboutcontent3 = ()=>{
  return (
    <div className="section3"><div className="secE"><h2>Where are we?</h2></div>
      <div className="secF">We initially launched this as a trail phase in <chennai className=""></chennai></div></div>
  )
}

// Footer.jsx

const Footer = () => {
  return (
    
    <div className="Contactparent" id="Footer">
      <Contactphone />
      <Contactemail />
      <Contactaddress />
    </div>
    
  )
}
export default Footer

const Contactphone = ()=>{
  return (
    <div className="ContactPhone">
      <div className="heading"><h2>Phone Number:</h2></div>
      <div className="phone"><p>+91 63838 24882</p></div>
      </div>
  )
}

const Contactemail = ()=>{
  return (
    <div className="Contactemail">
        <div className="heading"><h2>E-mail ID:</h2></div>
        <div className="email"><p>contact@serveease.com</p></div>
      </div>
  )
}

const Contactaddress = ()=>{
  return (
    <div className="Contactaddress">
        <div className="heading"><h2>Address:</h2></div>
        <div className="address"><p>Chennai, Tamil Nadu</p></div>
      </div>
  )
}


// Product_card.jsx
import React from 'react'

const Product_card = () => {
  return (
    <>
    <div className="product-card">
        <div className="product1">
        <div className="name"><h2>Product: SAMSUNG GALAXY M31</h2></div>
        <div className="price"><p>Price: $799</p></div></div>
        <div className="product2">
            <div className="name"><h2>Product: APPLE IPHONE 12</h2></div>
            <div className="price"><p>Price: $999</p></div>
        </div>
        <div className="product3">
            <div className="name"><h2>Product: GOOGLE PIXEL 6</h2></div>
            <div className="price"><p>Price: $699</p></div>
        </div>
    </div>
    </>
  )
}

export default Product_card


// Index.css
*{
  margin: 0;
  padding: 0;
  border: border-box;
}
.Navbarparent{
  background-color: rgb(223, 180, 100);
  padding-left: 30px;
  color: white;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
}
.navEl{
  display: flex;
  justify-content: space-around;
  gap: 30px;
  margin-right: 20px;
}
a{
  text-decoration: none;
  color: white;
}

.header{
  display: flex;
  justify-content: start;
  background-color: rgb(185, 158, 107);
  padding:10px;
  padding-left: 30px;
}


.Aboutparent{
    display: flex;
    justify-content: center;
    padding: 30px;
}
.Aboutparent>div{
    border: 1px solid rgb(185, 158, 107);
    padding: 20px;
    border-radius: 10px;
    margin-left: 30px;
    margin-right: 30px;
    background-color: rgb(185, 158, 107);
    color: white;
    width: 450px;
    height: 300px;
    align-content: center;
}
.Aboutparent>div>div{
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
}
.Contactparent{
 display: flex;
    justify-content: center;
    padding: 30px;   
    max-width: 100%;
    background-color: rgb(185, 158, 107);
    height: 140px;
}
.Contactparent>div{
    border: 1px solid rgb(185, 158, 107);
    padding: 20px;
    border-radius: 10px;
    margin-left: 30px;
    margin-right: 30px;
    background-color: rgb(185, 158, 107);
    color: white;
    align-content: center;
    border-right: 1px solid black;
    border-radius: 0px;

}
.Contactparent>div>div{
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
}

.product-card{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
.product-card>div{
  border: 1px solid rgb(185, 158, 107);
    padding: 20px;
    border-radius: 10px;
    margin-left: 30px;
    margin-right: 30px;
    background-color: white;
    color: black;
    width: 450px;
    height: 100px;
    align-content: center;
}
