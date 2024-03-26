
import './App.css';
import logo from './4730509.png';
import logo1 from './Python.png';
import logo2 from './front-end.png';
import logo3 from './react.png';
import logo4 from './instagram.png';
import logo5 from './facebook.webp';
import logo6 from './twitter.png';
import logo7 from './discord.webp';
import mainlogo from './Gemini_Generated_Image.jpeg';

function App() {
  return (
    <div className="main-page">
      <div className="navbar">
        <img className="logo-name"src={logo}></img>
        <h1 className="navbar-left">
          DEV & DES
        </h1>
        <ul className="navbar-right">
          <ul class="contents">Home</ul>
          <ul class="contents">About</ul>
          <ul class="contents">Services</ul>
          <ul class="contents">Contact</ul>
        </ul>
      </div>
      <div className="body">
        <div className="body-left">
          <img className="hi-main"src={mainlogo} alt="myLogo"></img>
        </div>
        <div className="body-right">
          <p>
            Hey, Guys! welcome to the DEV & DES.
            I am a member of DEV & DES.<br></br>
            It is a community which is for upcoming programmers.<br></br>
            It helps us for imporve their Knoweldge with experience coders.<br></br>
            and some realtime experience along with them.<br></br>
            We aquire more Knoweldge on coding by gathering with members.<br></br>
            It is a startup community.
          </p>
        </div>
      </div>
      <div className="services-section">
        <div className="service-card">
          <img className="python"src={logo1}></img>
          <h1>PYTHON</h1>
          <p className="content">I had good basic Knoweldge on PYTHON with <br></br>good logic skill and along with DSA analatics etc.</p>
        </div>
        <div className="service-card">
          <img className="front-end"src={logo2}></img>
          <h1>FRONT-END DEV</h1>
          <p className="content">I can design the website with HTML, CSS, JS.<br></br>
            along with scratch of code.<br></br>
          </p>
        </div>
        <div className="service-card">
          <img className="react"src={logo3}></img>
          <h1>REACT JS</h1>
          <p className="content">I have good hand's on experience on<br></br>
          REACT JS by creating a virtual web page in it.</p>
        </div>
      </div>
      <div className="contacts">
        <h2>For Any Contact</h2>
        <div className="contact-info">
          <div className="instagram">
            <img className="social-media" src={logo4}></img>
          </div>
          <div className="facebook">
            <img className="social-media" src={logo5}></img>
          </div>
          <div className="twitter">
            <img className="social-media" src={logo6}></img>
          </div>
          <div className="discord">
            <img className="social-media" src={logo7}></img>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default App;
