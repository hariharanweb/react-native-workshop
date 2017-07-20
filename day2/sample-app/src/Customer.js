import React, { Component, PropTypes } from 'react'


class Customer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            timeNow : new Date().toTimeString(),
            role: 'PrimeMinister'
        }
        // this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            role: e.target.value
        })
    }

    render() {
        return (
            <div>
                Hello {this.props.title}.{this.props.name} <br />
                {this.props.data.age} <br />
                {this.state.timeNow} <br />
                <span>{this.state.role}</span>
                <input type="text" value={this.state.role} 
                    onChange={this.handleChange}/>
            </div>
        )
    }
}

Customer.propTypes = Object.assign({}, Component.propTypes, {
    name: PropTypes.string.required,
    title: PropTypes.string
})

export default Customer