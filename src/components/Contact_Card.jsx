import React from "react";

const ContactCard = ({ contact, deleteContact }) => {
  return (
    <div>
      <div>
        <span>{contact.name + " " + contact.surname}</span>
        <br />
        <span>{contact.phone}</span>
        <br />
        <span>{contact.email}</span>
        <br />
        <button
          onClick={() => {
            //delete with button clicked
            deleteContact(contact.email);
          }}
        >
          Delete this contact
        </button>
      </div>
      <br />
    </div>
  );
};

export default ContactCard;
