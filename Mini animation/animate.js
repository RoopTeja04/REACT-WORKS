
import './App.css';
import logo1 from './facebook-removebg-preview.png';
import logo2 from './instagramlogo-removebg-preview.png';
import logo3 from './twitter-removebg-preview.png';
import logo4 from './flat-color-camera-logo-ai-generated_860599-6241.avif';
import logo5 from './preweeding.jpeg';
import logo6 from './weeding.jpeg';
import logo7 from './baby.jpeg';

function App() {
  
  return(
    <>
      <div className="nav">
        <h3 className="tags">HOME</h3>
        <h3 className="tags">SERVICES</h3>
        <h3 className="tags">CONTACT</h3>
        <h3 className="tags">ABOUT</h3>
      </div>
      <div className="info">
        <div className="bio">
          <h1>PHOTOSNAP</h1>
          <p>The Art or Process of producing images<br></br>
            by the action of radiant energy and especially light on a<br>
            </br> sensitive surface.
            <p>It gives a beautifull memories for you</p>
          </p>
          <img  className="socialmedia" src={logo1} alt="my logo"></img>
          <img  className="socialmedia" src={logo2} alt="my logo"></img>
          <img  className="socialmedia-1" src={logo3} alt="my logo"></img>
        </div>
        <div className="image">
          <img  className="main" src={logo4} alt="my logo"></img>
        </div>
      </div>
      <div className="services">
        <div className="pre-weeding">
          <img  className="second" src={logo5}/>
          <p className="content">A private party that the bride and groom usually do the day before the weeding with the closet guests.</p>
        </div>
        <div className="weeding">
          <img className="second" src={logo6}/>
          <p className="content">A marriage ceremony usually with its accompanying festivities</p>
        </div>
        <div className="baby-shower">
          <img className="second" src={logo7}/>
          <p className="content">The name baby shower comes from 'showering the mother with gifts and love' </p>
        </div>
      </div>
    </>
    
  );  
}
  
export default App;

