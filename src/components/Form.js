import React, { Component, protoTypes } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(event) {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="form">
          <h3>What is your name pilot?</h3>
          <form action="">
            <input name="name" onChange={this.handleFormSubmit} type="text" value={this.state.name} />
            <input label="Submit" className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}
export default Form
