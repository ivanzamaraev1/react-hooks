import React, {useState} from 'react'

function useInput(startValue) {
    const [value, setValue] = useState(startValue)
    const onChange = event => setValue(event.target.value)
    const clear = () => setValue('')
    return {
        bind: {value, onChange},
        value,
        clear
    }
}

export default function MyHook() {
    const input = useInput('')
    const lastName = useInput('')

    return (
        <div className={'container pt-3'}>
            <h1>{input.value}</h1>
        <input type="text" {...input.bind}></input>
        <input type="text" {...lastName.bind}></input>

        <button className="btn btn-warning" onClick={() => input.clear()}>Clear</button>
        <hr/>
        </div>
    )
}
