import React, { Component } from 'react';
import matt from '../images/matt-decuir-headshot-small.jpg';
import { Button } from '@blueprintjs/core';
import '../styles/App.css';

class App extends Component {
  scrollTo = (target) => {
    return () => {
      document.querySelector('#' + target).scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  render() {
    return (
      <div className="App">

        <section id="header">
          <div className="menu-button">
            <Button className="pt-large" icon="menu" />
          </div>
          <div className="hello flex-container">
            <img src={matt} alt="Matt Decuir headshot"/><br />
            <h1>Hi, I&#39;m Matt</h1>
            <Button className="pt-dark pt-large" text="Learn more" onClick={this.scrollTo('about')} />
          </div>
        </section>

        <section id="about">
          <div className="flex-container">
            <h1>I&#39;m a software engineer, bicyclist, and pizza enthusiast</h1>
          </div>
        </section>

        <section id="specialties" className="dark">
          <div className="flex-container">
            <h1>My specialties include Software Development, Product Management, Data Analysis, and Community Building.</h1>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
