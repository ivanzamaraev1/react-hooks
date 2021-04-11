import React, {useState, useCallback, useEffect} from 'react'
import ItemsList from './other/ItemsList.js'

export default function Callback() {
  const [count, setCount] = useState(1)
  const [colored, setColored] = useState(false)

  const styles = {
      color: colored ? 'darkred' : 'black'
  }

  const ItemsFromAPI = useCallback(() => {
      return new Array(count).fill('').map((_, i) => `Elems ${i + 1}`)
  }, [count])
  
    return (
        <div>
            <br></br><br></br><br></br>
            <h1 style={styles}>Value of elements {count}</h1>
        <button className="btn btn-success" onClick={() => setCount(count + 1)}>Add</button>

         <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Change</button>

         <ItemsList getItems={ItemsFromAPI}/>
        </div>
    )
}
