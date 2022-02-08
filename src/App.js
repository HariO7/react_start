import "./App.css"
import {useState} from 'react'
function App() {
  const [count,setcount] = useState(0)
  const addCount = () =>{
      setcount(count+1)
      console.log(setcount)
      
  }
  return (
    <div> 
   <h1 className="hello">counter: {count}</h1>
   <button onClick={addCount}>add</button>
   
   </div>
  );
}

export default App;
