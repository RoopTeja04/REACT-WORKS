import {useState} from 'react';
import './App.css';


function App() {
  const [inputs, setInputs]= useState({});
  const handleChange = (event) =>{
    const name= event.target.name;
    const value= event.target.value;
    setInputs(values =>({...values, [name]:value}))
  }
  const handleSubmit =(event) =>{
    event.preventDefault();
    alert("your data is saved Successfully.....");
  }
  return (
    <div className="feedback">
      <h1>FEEDBACK FORM!</h1><br></br>
      <form onSubmit={handleSubmit}>
          <label>
            Enter your Name:<br></br>
            <input type="name"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
            />
          </label><br></br>
        <label>
          Enter your Email:<br></br>
          <input type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          />
        </label><br></br>
        <label>
          Enter Your Mobile No:<br></br>
          <input type="mobile "
          name="mobile"
          value={inputs.mobile || ""}
          onChange={handleChange}
          />
        </label><br></br>
        <label> Write your feedback<br></br>
        <textarea/><br></br>
        </label>
        <button>SUBMIT</button>
      </form>
    </div>
      
  );  
}

export default App;
