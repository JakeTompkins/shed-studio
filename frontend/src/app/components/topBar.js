import React from 'react'
import ContactDropDown from './contactDropDown'
import './topBar.css'


export default function TopBar(props)
{
    return(
        <div className="navbar has-shadow is-fixed-top is-flex-mobile">

            <div className="navbar-brand">
                <div className="navbar-item">
                    <img alt="logo" src={props.logoUrl}/>
                </div>
           
                <h1 className="navbar-item title is-2" id="title">{props.name}</h1>
            </div>
            
            <div className="navbar-end">    
                <div className="navbar-menu">
                    {
                        Object.keys(props.social).map(site => {
                        return(
                            <div style={{display: "flex"}}className="is-vcentered">
                                <a href={props.social[site]} className="navbar-item">{site}</a>
                            </div>  
                        )
                        })
                    }
                </div>

                <button class="navbar-burger burger">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                </button>
            </div>
        </div>
    )
}
