import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/app'

function Root(props)
{
    return(
        <App />
    )
}

ReactDOM.render(<Root />, document.getElementById('root'))