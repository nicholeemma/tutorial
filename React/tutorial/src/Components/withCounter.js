import React from 'react'
// Wrappd must be capitalized
const withCounter = (WrappedComponent, incrementNum) => {
    
    class withCounter extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            } 
            
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return  {count : prevState.count + incrementNum}
            } )
        }

        render() {
            return <WrappedComponent count = {this.state.count} 
            incrementCount = {this.incrementCount}
            {...this.props}/>
        }
    }
    return withCounter
}

export default withCounter