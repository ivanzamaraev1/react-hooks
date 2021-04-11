import React, {useState} from 'react'
import Eff from './Effect.js'
import Callback from './Callback.js'
import Context from './Context.js'
import MyHook from './MyHook.js'

function App() {
  const [count, setCount] = useState(0)
  const [state, setState] = useState({
    title: 'Counter'
  })


  return (
    <div>
      <h1>{state.title}: {count}</h1>
    
      <button onClick={() => setCount(count + 2)} className="btn btn-success">Add</button>
      <button onClick={() => setCount(count - 1)} className="btn btn-danger">Delete</button>
      <button onClick={() => setCount(count * 2)} className="btn btn-danger">Multiply</button>

      
      <button onClick={() => setState({title: 'New Title'})} className="btn btn-default">Change the Title</button>
      <button onClick={() => setState({title: 'Counter'})} className="btn btn-default">Change the Title Back</button>

      <br></br><br></br><br></br>
      <Eff/>
      <br></br><br></br><br></br>
      <Callback/>
      <br></br><br></br><br></br>
      <Context/>
      <br></br><br></br><br></br>
      <MyHook/>
      <br></br><br></br><br></br>
    </div>
  )
}



export default App