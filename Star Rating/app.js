
import './App.css';

function App() {

  const handleSubmit =(event)=>{
    event.preventDefault();
    alert("thank you");
  }

  return (
    <div className="star-rating">
      <h1>Please share your response</h1>
      <h3>rate your experience..</h3>
      <form onSubmit={handleSubmit}>
        <button type="submit">1</button>
        <button type="submit">2</button>
        <button type="submit">3</button>
        <button type="submit">4</button>
        <button type="submit">5</button>
      </form>
    </div>
  );
}

export default App;
