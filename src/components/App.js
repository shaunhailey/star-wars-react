import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
constructor (props){
  super (props)
}
this.handleNameChange = this.handleNameChange.bind(this)

this.state({vehicles: [], value : '', pilot: ''})


  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
handleNameChange(event){
this.setState({name: event.target.value})
}


  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  handleFormSubmit(event) {
      event.preventDefault()
      const newPilot = {
        pilot: this.state.value,
      }

      // this.setState({
      //   comments: comments,
      //   comment: '',
      //   name: ''
      // })


  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:


  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    })
    return (
      {/*
        The App component needs the following:
        jumbotron section, form section, vehicle cards section.
        Your form will also need a header in which you will pass the state of the form upon submit.
        */}
      <div className="App">
            <div className="jumbotron">
              <h1>Welcome to NASA</h1>
            </div>
      </div>

                <div className="form">
                  <h3>Leave A Comment</h3>
                  <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="comment"
                        rows="3"
                        type="text"
                        value={this.state.commentText}
                        onChange={this.handleCommentTextChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control col-md-3"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                      />
                    </div>
                    <div className="form-group pull-right">
                      <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                    </div>
                  </form>
                  <div> className="vehicle cards"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row">
          <div className="col-md-10 offset-md-1">
            <div className="card comments">
              <div className="card-block">
                <h4 className="card-subtitle mb-2 text-muted">Comments</h4>
                <div className="card comments col-md-5">
                  {this.state.comments.map((comment, i) => {
                    return (
                      <div key={i}>
                        <p>
                          {comment.comment}
                        </p>
                        <p>
                          {comment.name}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

      </div>
    );
  }
}

export default App;
