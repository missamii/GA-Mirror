import axios from 'axios';

const helpers = {
  getContacts: function(){
    return axios.get('http://localhost:8080/contacts');
  },
  addContact: function(contact){
    return axios.post('http://localhost:8080/contacts/new', contact);
  },
  findContact: function(contact){
    return axios.get('http://localhost:8080/contacts/' + contact.name);
  },
  deleteContact: function(contact){
    return axios.delete('http://localhost:8080/contacts/' + contact.name);
  },
  updateContact: function(contact){
    return axios.put('http://localhost:8080/contacts/' + contact.name, contact);
  }
}

export default helpers;



/* get all contacts */
// axios.get(ajaxURL +'/contacts')
// .then(function(response){
//   console.log("Response.data:", response.data);
//   this.setState({
//     ajaxReturn: response.data
//   });
// }.bind(this))
// .catch(function(err){
//   console.warn('Error');
//   return err;
// })
