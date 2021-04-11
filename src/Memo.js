import React, {useState, useMemo} from 'react'

export default function Memo() {
  const [count, setCount] = useState(42)
  const [colored, setColored] = useState(false)

  const stylesFont = useMemo(() => {({
      color: colored ? 'darkblue' : 'black'
  })}, [colored])

    return (
        <div>
            <br></br><br></br><br></br>
            <h1 style={stylesFont}>{count}</h1>
            <button className="btn btn-success" onClick={() => setCount(count + 1)}>Add</button>
            <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Add</button>

            <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Change Color</button>
        </div>
    )
}
