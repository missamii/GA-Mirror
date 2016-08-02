import React from 'react';

const DeleteContact = React.createClass({
  handleName: function(e){
    this.props.nameInput(e);
  },

  render: function() {
    return(
      <div>
        <p>Delete Contact: </p>
        <label>Name:</label>
        <input onChange={this.handleName}/>
        <br />
        <button onClick={this.props.onSubmit}>Delete</button>
        <hr></hr>
      </div>
    );
  }
});

export default DeleteContact;
