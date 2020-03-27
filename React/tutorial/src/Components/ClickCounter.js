import React, { Component } from 'react'
import updatedComponent from './withCounter.js'
import withCounter from './withCounter.js'
class ClickCounter extends Component {

    
    
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>

                <button onClick={incrementCount}>
                    {this.props.name}
                    click {count} times 
                </button>
            </div>
        )
    }
}

export default withCounter(ClickCounter,1)
