import './App.css';

function App() {
  return (
    <div className='main'>
      <h1 className="head">SIGN IN</h1>
      <div className="enter">
        <div className="details">
          <label className="name" >Email Name<br></br>
            <input type="text" ></input>
          </label>
          <br></br>
          <br></br>
          <label className="name" >password<br></br>
            <input type="password"></input>
          </label>
        </div>
        <br></br>
        <button className="signin">SIGN IN</button>
          <br>
          </br>
        <h4 className="forgot">Forgot Password ?</h4>
          <br></br>
        <button className="signup">SIGN UP</button>
      </div>
    </div>
  );
}

export default App;
