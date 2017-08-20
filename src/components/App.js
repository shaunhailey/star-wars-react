import React, { Component } from 'react'
import '../styles/App.css'
import Header from './Header.js'
import Form from './Form.js'
import Vehicles from './Vehicles.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  handleSubmit(event) {
    this.setState({ name: this.state.name })
  }

  fetchVehicles() {
    fetch('https://swapi.co/api/vehicles/?format=json')
      .then(res => {
        return res.json()
      })
      .then(vehicles => {
        this.setState({ vehicles })
      })
  }

  render() {
    return (
      <div className="App container">
        <Header />
        <Form />
        <Vehicles />
      </div>
    )
  }
}

export default App
