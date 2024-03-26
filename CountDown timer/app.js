import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const[date, setDate] =useState(2);
  const[hour, setHour] = useState(24);
  const[minute, setMinute] = useState(60);
  const[second, setSecond] = useState(60);

  useEffect(()=>{
    setTimeout(()=>{
      setSecond((second)=> second-1);

      if(second===1){
        setMinute(minute-1);
        setSecond(60);

        if(minute===1){
          setHour(hour-1);
          setMinute(60);
        }

        if(hour===1){
          setDate(date-1);
          setMinute(60);
          setHour(60);
          setSecond(60);
        }
        
      }
    }, 1000);
  })
  return (
    <>
      <h1>The <h4>TATA IPL 2024</h4> Starts at </h1>
      <h2>{date}  :  {hour}  :  {minute}  :  {second}</h2>
    </>
  );
}

export default App;
