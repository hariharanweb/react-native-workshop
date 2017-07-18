import React, { Component } from 'react'

class Customer extends Component {
    render () {
        return (
            <div>
              Welcome {this.props.name}
            </div>
        )
    }
}

export default Customer