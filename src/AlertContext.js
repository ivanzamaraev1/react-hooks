import React, {useContext, useReducer} from 'react'

const AlertContext = React.createContext()

export const useAlert = () => {
  return useContext(AlertContext)
}

const show_alert = 'show'
const hide_alert = 'hide'

const reducer = (state, action) => {
  switch (action.type) {
    case show_alert: return {...state, visible: true, text: action.text}
    case hide_alert: return {...state, visible: false}
    default: return state
  }
}

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: ''
  })

  const show = text => dispatch({ type: show_alert, text })
  const hide = () => dispatch({ type: hide_alert })

  return (
    <AlertContext.Provider value={{
      visible: state.visible,
      text: state.text,
      show, hide
    }}>
        { children }
    </AlertContext.Provider>
  )
}
