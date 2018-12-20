import React, { Fragment } from 'react'
import './contactDropDown.css'

export default class ContactDropDown extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            expanded: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick()
    {
        
        this.setState(preS => {
            let expanded = !preS.expanded
            return {expanded: expanded}
        })
    }

    render()
    {
        return(
            <div id="drop-down-container" className="navbar-item dropdown is-right is-active">
                <h1 id="drop-down-trigger" className="dropdown-trigger" onClick={() => this.handleClick()}>Contact Shed</h1>
            
                    {
                        this.state.expanded ?
                        <div className="dropdown-menu">
                            <div className="dropdown-content">
                            <a href={"mailto:" + this.props.email} id="email-link" className="dropdown-item">{this.props.email}</a>
                            <div className="dropdown-divider"></div>
                                <ol>
                                    {
                                        Object.keys(this.props.social).map(site => {
                                            return (
                                                <Fragment>
                                                    <li key={site} className="dropdown-item"><a href={this.props.social[site]}>{site}</a></li>
                                                    <div className="dropdown-divider"></div>
                                                </Fragment>
                                            )
                                        })
                                    }
                                </ol>
                            </div>
                        </div> :
                        null
                    }
            </div>
            
        )
    }

}