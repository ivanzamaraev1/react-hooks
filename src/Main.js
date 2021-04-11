import React from 'react'
import {useAlert} from './AlertContext'

export default function Main() {
  const {show} = useAlert()
  return (
      <div>
    <h1>Hello in example of Context</h1>
      <button onClick={() => show('Text from Main.js')} className="btn btn-success">Показать alert</button>
    </div>
  )
}