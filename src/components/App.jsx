import React, { useState } from "react";
import ModalPopUp from "./ModalPopUp";
import { Button, ButtonToolBar } from "react-bootstrap";
import css from "/public/styles.css";

import Contacts from "./Contacts";
import { Grid } from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      searchedText: "",
      name: "",
      gender: "",
      phone: "",
      email: "",
      dateCreated: "",
      dateModified: "",
      nameError: false,
      emailError: false,
      addModalShow: false
    };
  }

  //Searching handling

  //returnContactList, return either searchresult or current one
  searchValue = (e) => {
    this.setState({
      searchedText: e.target.value
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addContact = (e) => {
    const { name, gender, phone, email, contacts } = this.state;
    e.preventDefault();
    if (name === "" && email === "") return;

    contacts.push({
      name: name,
      gender: gender,
      phone: phone,
      email: email
    });

    this.checkForErrors(name, email);

    this.setState({
      contacts: contacts,
      name: "",
      gender: "",
      phone: "",
      email: ""
    });
  };

  deleteContact = (email) => {
    const { contacts } = this.state;
    const filteredContacts = contacts.filter((contact) => {
      return contact.email !== email;
    });
    this.setState({
      contacts: filteredContacts
    });
  };

  editContact = (email, name, gender, phone) => {
    const { contacts } = this.state;
    const edited = contacts.filter((contact) => {
      return (
        contact.email === email ||
        contact.name === name ||
        contact.gender === gender ||
        contact.phone === phone
      );
    });
    this.setState({
      name: edited.name,
      gender: edited.gender,
      phone: edited.phone,
      email: edited.email,
      dateModified: `Modified: ${new Date().toLocaleDateString()}`
    });
  };

  checkForErrors = (name, email) => {
    this.state.contacts.map((contact) => {
      if (contact.name === name) {
        this.setState({
          nameError: true,
          addModalShow: true
        });
      }
      if (contact.email === email) {
        this.setState({
          emailError: true,
          addModalShow: true
        });
      }
    });
    return this.state.nameError || this.state.emailError ? true : false;
  };

  //******* Modal functions ********//
  handleShow(event) {
    let buttonClicked = this.state.modalbutton;
    buttonClicked = true;
    this.setState({
      modalbutton: buttonClicked
    });
  }

  handleClose(event) {
    const modalshow = false;
    this.setState({ addModalShow: modalshow });
  }

  show(event) {
    let buttonClicked = this.state.modalbutton;
    buttonClicked = true;
    this.setState({
      modalbutton: buttonClicked
    });
  }

  //Modal Content
  modalTriggered(event) {
    const modalshow = true;
    this.setState({ addModalShow: modalshow });
  }
  //******* Modal functions ********//

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });

    const {
      contacts,
      searchedText,
      name,
      email,
      nameError,
      emailError
    } = this.state;
    const {
      searchValue,
      handleChange,
      editContact,
      deleteContact,
      addContact
    } = this;

    const filteredContacts = contacts.filter((contact) => {
      return (
        contact.name.toLowerCase().indexOf(searchedText.toLowerCase()) !== -1
      );
    });

    return (
      <div className="container">
        <div className="heading">
          <h1>Contact List</h1>
        </div>
        <Grid>
          <Contacts
            contacts={filteredContacts}
            searchValue={searchValue}
            searchedText={searchedText}
            addContact={addContact}
            handleChange={handleChange}
            formInputName={name}
            email={email}
            editContact={editContact}
            deleteContact={deleteContact}
            nameError={nameError}
            emailError={emailError}
          />
        </Grid>
        <div>
          <ModalPopUp show={this.state.addModalShow} onHide={addModalClose} />
        </div>
      </div>
    );
  }
}

const searchEmail = (contact, searchText) =>
  contact.email.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
  contact.phone.toString().search(searchText) !== -1;

export default App;
