import React from 'react'
import Main from './Main'
import Alert from './Alert'
import {AlertProvider} from './AlertContext'

function Context() {
  return (
    <AlertProvider>
      <div className={'container pt-3'}>
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvider>
  )
}

export default Context