import React from 'react'
import './descriptionTextBox.css'

export default function DescriptionTextBox(props)
{
    return(
        <div id="descriptionTextBox">
            <h1 id="pagetitle" className="title is-2">{props.title}</h1>
            <div className="divider-container">
                <svg width="100%" height="100%">
                    <line x1="0" y1="0" x2="100%" y2="0"/>
                    Sorry, your browser does not support inline SVG.
                </svg>
            </div>
            <div id="description">
                <p className="subtitle is-5">{props.text}</p>
            </div>
        </div>
    )
}