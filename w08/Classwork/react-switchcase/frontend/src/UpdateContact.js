import React from 'react';

const UpdateContact = React.createClass({
  handleName: function(e){
    this.props.nameInput(e);
  },
  handleNewName: function(e){
    this.props.newNameInput(e);
  },
  handleNewEmail: function(e){
    this.props.newEmailInput(e);
  },

  render: function() {
    return(
      <div>
        <p>Update Contact: </p>
        <label>Name to update:</label>
        <input onChange={this.handleName}/>
        <br />
        <label>New Name:</label>
        <input onChange={this.handleNewName}/>
        <br />
        <label>New Email:</label>
        <input onChange={this.handleNewEmail}/>
        <br />
        <button onClick={this.props.onSubmit}>Update</button>
        <hr></hr>
      </div>
    );
  }
});

export default UpdateContact;
