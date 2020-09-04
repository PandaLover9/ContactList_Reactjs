import React from "react";

//update

const ContactCard = ({ contact, deleteContact, updateContact }) => {
  return (
    <div>
      <div>
        <span>{contact.name}</span>
        <br />
        <span>{contact.gender}</span>
        <br />
        <span>{contact.email}</span>
        <br />
        <span>{contact.phone}</span>
        <br />

        <button
          onClick={() => {
            //delete with button clicked
            deleteContact(contact.email);
          }}
        >
          Delete
        </button>
        <br />
        <button
          onClick={() => {
            //delete with button clicked
            updateContact(contact.email);
          }}
        >
          Edit
        </button>
      </div>
      <br />
    </div>
  );
};

export default ContactCard;
