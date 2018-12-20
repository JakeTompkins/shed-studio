import React, { Fragment } from 'react'
import VideoThumb from './videoThumb'
import './gallery.css'

class Gallery extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            expanded: false
        }

        this.handleTitleClick = this.handleTitleClick.bind(this)
    }

    handleTitleClick()
    {
        this.setState((prevState) => {
            let expanded = !prevState.expanded
            return {
                expanded: expanded
            }
            
        })
    }

    render()
    {
        return(
            <Fragment>
            <div id="gallery" className="columns">
                <div className="column">
                    <h1 className="title is-2 gallery-category">{this.props.category}</h1>
                    <div className="divider-container">
                        <svg width="100%" height="100%">
                            <line x1="0" y1="0" x2="100%" y2="0"/>
                            Sorry, your browser does not support inline SVG.
                        </svg>
                    </div>
                </div>
                </div>
                <div className="columns">
                {
                    this.props.urls.map(url => {
                        return <VideoThumb
                                src={url}
                                />
                    })
                }
            </div>
            </Fragment>
        )
    }
}

export default Gallery