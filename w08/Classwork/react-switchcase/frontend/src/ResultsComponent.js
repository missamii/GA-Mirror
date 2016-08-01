import React from 'react';

function ResultsComponent(props){
  return(
    <div>
      <h3 className="title-box">ResultsComponent</h3>
      <ul>
        {
          props.contacts.map( (contact, index) => {
            return <li key={index}>{contact.name}, {contact.email}</li>;
          })
        }
      </ul>
    </div>
  )
}

export default ResultsComponent;
