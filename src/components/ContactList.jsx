import React from "react";
import {
  List,
  Button,
  IconButton,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditContactList from "./EditContactList";

function renderEditForm() {
  return (
    <div>
      <EditContactList />
    </div>
  );
}

var isHidden = false;
function showEditContactBox() {
  isHidden = false;
  return renderEditForm();
}

const ContactList = ({ contacts, editContact, deleteContact }) => {
  const rows = contacts.map((contact, i) => (
    <ListItem key={i} className="list-item">
      <ListItemText primary={contact.name}></ListItemText>
      <ListItemText primary={contact.gender}></ListItemText>
      <ListItemText primary={contact.phone}></ListItemText>
      <ListItemText primary={contact.email}></ListItemText>
      <ListItemText
        primary={`Created: ${new Date().toLocaleDateString()}`}
      ></ListItemText>
      <Button
        style={{ marginLeft: "10px", outline: "none" }}
        color="primary"
        onClick={renderEditForm}
      >
        edit
      </Button>
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          variant="extended"
          color="secondary"
          style={{ marginLeft: "5px" }}
          onClick={deleteContact.bind(this, contact.email)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ));

  return <List>{rows}</List>;
};

export default ContactList;
