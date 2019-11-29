import Nav from "./Nav";
import React, { Component } from "react";
import './index.scss';
//...

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  render = () => {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <div className="jumbotron">
              <h1 className="display-4">Welcome On Board!</h1>
              <p className="lead">Bienvenue dans votre gestionnaire de contacts professionnel.</p>
              <hr className="my-4" />
              <p>L'outil indispensable pour gérer vos contacts.</p>
              <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
            </div>
          </header>
          <Nav />
          <div className="row">
            <div className="col p-2">
              <h1>Contacts</h1>
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default App;