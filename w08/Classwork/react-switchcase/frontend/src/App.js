import React from 'react';
import axios from 'axios';
import ajaxHelpers from './utils/ajaxHelpers';

import Title from './Title';
import FormComponent from './FormComponent';
import ResultsComponent from './ResultsComponent';

import AddContact from './AddContact';
import DeleteContact from './DeleteContact';
import UpdateContact from './UpdateContact';
import FindContact from './FindContact';
import GetContacts from './GetContacts';


const App = React.createClass({

  getInitialState: function() {
    return {
      ajaxReturn: [],
      radioVal: '',
      name: '',
      email: '',
      newName: '',
      newEmail: ''
    };
  },

  updateValState: function(e) {
    console.log("You've chosen:", e.target.value);
    this.setState({
      radioVal: e.target.value
    });
  },

  getContactsAjaxCall: function() {
    console.log('Get all contacts!');
    ajaxHelpers.getContacts()
    .then(function(response){
      console.log("response.data", response.data);
      this.setState({
        ajaxReturn: response.data
      });
    }.bind(this));
  },

  addContactAjaxCall: function() {
    console.log('Add new contact:', this.state.name, this.state.email);

    const contact = {
      name: this.state.name,
      email: this.state.email
    };
    ajaxHelpers.addContact(contact)
  },

  findContactAjaxCall: function() {
    console.log('Find this contact:', this.state.name);
    const contact = {
      name: this.state.name,
    };
    ajaxHelpers.findContact(contact)
    .then(function(response){
      console.log("response.data", response.data);
      this.setState({
        ajaxReturn: response.data
      });
    }.bind(this));
  },

  deleteContactAjaxCall: function() {
    console.log('Delete this contact:', this.state.name);
    const contact = {
      name: this.state.name,
    };
    ajaxHelpers.deleteContact(contact)
    .then(function(response){
      console.log("response.data", response.data);
      this.setState({
        ajaxReturn: response.data
      });
    }.bind(this));
  },

  updateContactAjaxCall: function() {
    console.log('Update this contact:', this.state.name);
    const contact = {
      name: this.state.name,
      newName: this.state.newName,
      newEmail: this.state.newEmail
    };
    ajaxHelpers.updateContact(contact)
    .then(function(response){
      console.log("response.data", response.data);
      this.setState({
        ajaxReturn: response.data
      });
    }.bind(this));
  },

  nameInput: function(e){
    this.setState({
      name: e.target.value
    })
  },
  emailInput: function(e){
    this.setState({
      email: e.target.value
    })
  },
  newNameInput: function(e){
    this.setState({
      newName: e.target.value
    })
  },
  newEmailInput: function(e){
    this.setState({
      newEmail: e.target.value
    })
  },

  getAppropriateFormComponent: function() {
    switch (this.state.radioVal) {
      case 'see-all':
        console.log('see-all case');
        return (
          <GetContacts onSubmit={this.getContactsAjaxCall} />
        );
        break;

      case 'add-new':
        console.log('add-new case');
        // show AddContact UI
        return (
          <AddContact
            nameInput={this.nameInput} emailInput={this.emailInput}
            onSubmit={this.addContactAjaxCall}
          />
        );
        break;

      case 'find-contact':
        console.log('find-contact case');
        return (
          <FindContact
            nameInput={this.nameInput}
            onSubmit={this.findContactAjaxCall}
          />
        )
        break;

      case 'delete-contact':
        console.log('delete-contact case');
        return (
          <DeleteContact
            nameInput={this.nameInput}
            onSubmit={this.deleteContactAjaxCall}
          />
        )
        break;

      case 'update-contact':
        console.log('update-contact case');
        return (
          <UpdateContact
            nameInput={this.nameInput}
            newNameInput={this.newNameInput}
            newEmailInput={this.newEmailInput}
            onSubmit={this.updateContactAjaxCall}
          />
        )
        break;

      default:
        return <p>Make a choice</p>
    }
  },

  render: function(){
    const getAppropriateFormComponent = this.getAppropriateFormComponent();
    return(
      <div className="main-container">
        <Title/>
        <FormComponent updateValState={this.updateValState} />
        {getAppropriateFormComponent}
        <ResultsComponent contacts={this.state.ajaxReturn} />
      </div>
    )
  }
});

export default App;
