import React, { useState } from "react";
import ModalPopUp from "./ModalPopUp";
import { Button, ButtonToolBar } from "react-bootstrap";
import css from "/public/styles.css";

import ContactCard from "./Contact_Card";
import AddContact from "./AddContact";
import SearchBar from "./SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchResult: [],
      contactList: [],
      addModalShow: false
    };

    this.handleNewContact = this.handleNewContact.bind(this);
    this.returnContactList = this.returnContactList.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  //Searching handling

  //returnContactList, return either searchresult or current one
  returnContactList() {
    return this.state.searchEmail
      ? this.state.searchResult
      : this.state.contactList;
  }

  //handle new contact
  handleNewContact(newContact) {
    this.setState(
      (prevState) => ({
        contactList: [...prevState.contactList, newContact]
      }),
      () => console.log(this.state.contactList)
    );
  }

  //delete contact
  deleteContact(email) {
    const { contactList } = this.state;
    const filteredContactList = contactList.filter((contact) => {
      return contact.email !== email;
    });
    this.setState({
      contactList: filteredContactList
    });
  }

  // search contact (by email)
  handleSearch(searchText) {
    this.setState({ searchResult: [], searchText: searchText });
    this.state.contactList.map((contact) => {
      if (searchEmail(contact, searchText)) {
        this.setState(
          (prevState) => ({
            searchResult: [...prevState.searchResult, contact]
          }),
          () => console.log(this.state.searchResult)
        );
      }
    });
  }

  // edit contact
  setUpdate(email) {
    const contactList = this.state.contactList;
    contactList.map((selectedContact) => {
      if (selectedContact.email === email) {
        console.log(selectedContact.email + " " + email);
      }
    });
    //update state
    this.setState({
      contactList: contactList
    });
  }

  //******* Modal functions ********//
  handleShow(event) {
    let buttonClicked = this.state.modalbutton;
    buttonClicked = true;
    this.setState({
      modalbutton: buttonClicked
    });
  }

  handleClose(event) {
    let buttonClicked = this.state.modalbutton;
    buttonClicked = false;
    this.setState({
      modalbutton: buttonClicked
    });
  }

  show(event) {
    let buttonClicked = this.state.modalbutton;
    buttonClicked = true;
    this.setState({
      modalbutton: buttonClicked
    });
  }

  //******* Modal functions ********//

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <div className="container">
        <div className="heading">
          <h1>Contact List</h1>
        </div>
        <div className="form">
          <SearchBar onSearch={this.handleSearch} />
          <br />
          <AddContact onSubmit={this.handleNewContact} />
          <br />
          <ul className="list-group" id="contact-list">
            {this.returnContactList().map((contact) => (
              <li key={contact.email} className="list-group-item">
                <ContactCard
                  contact={contact}
                  deleteContact={this.deleteContact}
                  updateContact={this.setUpdate}
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Button
            variant="primary"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Modal Pop Up mou?
          </Button>
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
