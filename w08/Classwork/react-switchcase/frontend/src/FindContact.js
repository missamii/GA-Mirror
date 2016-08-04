import React from 'react';

const FindContact = React.createClass({

  handleName: function(e){
    this.props.nameInput(e);
  },

  render: function() {
    return(
      <div>
        <p>Find Contact: </p>
        <label>Name:</label>
        <input onChange={this.handleName}/>
        <br />
        <button onClick={this.props.onSubmit}>Find</button>
        <hr></hr>
      </div>
    );
  }
});

export default FindContact;
