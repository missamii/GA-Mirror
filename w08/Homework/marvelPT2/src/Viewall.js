import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Helper from './utils/helpers.js';


class Viewall extends Component {
constructor(){
  super()
  this.state = {
    results: []
  };
}
  onClick(e) {
    Helper.getMarvel()
      .then((value) => {
        this.setState({
          results: value
        });
      });
    console.log(this.state.results);
  }
  render() {
    return(
      <div className="Viewall">
        <h2>View Marvel Characters</h2>
        <b>Name:</b> Storm<br />
        <b>Abilities:</b>	Weather manipulation, Flight, Ecological empathy
        <b>Species:</b> Human Mutant<br />
                  <br />
        <b>Name:</b> Psylocke <br />
        <b>Abilities:</b>	Expert martial artist, Telekinesis, Telepathy, Precognition, Ability to construct weapons made of psychic energy, usually in the form of a katana or knife.<br />
        <b>Species:</b> Human Mutant <br />
                  <br />
        <b>Name:</b> Nightcrawler <br />
        <b>Abilities:</b>		Superb fencer, Superhuman agility, dexterity, coordination, reflexes and balance. Enhanced flexibility, speed and night vision, Teleportation, Prehensile tail. Ability to stick to walls and blend into shadows<br />
        <b>Species:</b> Human Mutant<br />

        {/* <button id="button" onClick={(event) => this.onClick(event)}>see all!</button> */}
      </div>
    )
  }
}
export default Viewall
