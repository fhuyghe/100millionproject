import React from 'react'
import './DrawerToggle.scss'

class DrawerToggle extends React.Component {
    constructor(props) { 
        super(props)
        
        this.state = {
            display: false
        }

        this.toggleState = this.toggleState.bind(this)
    }

    toggleState() {
        this.setState({
            display: !this.state.display
        })
    }

    render(){
    return (
        <div className="drawer-toggle-wrap">
            <div className="drawer-toggle-title" onClick={this.toggleState}>
                <h6>{this.props.title}</h6>
                <div className="arrow">
                    {this.state.display
                        ? <i class="fas fa-sort-up"></i>
                        : <i class="fas fa-sort-down"></i>
                    }
                </div>
            </div>
            {this.state.display && <div className="drawer-toggle-content">
                {this.props.children}
            </div>}
        </div>
    )}
}

export default DrawerToggle