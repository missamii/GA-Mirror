import React from 'react';

const GetContacts = React.createClass({

  handleName: function(e){
    this.props.nameInput(e);
  },

  render: function() {
    return(
      <div>
        <p>Get All Contacts: </p>
        <br />
        <button onClick={this.props.onSubmit}>Get All!</button>
        <hr></hr>
      </div>
    );
  }
});

export default GetContacts;
