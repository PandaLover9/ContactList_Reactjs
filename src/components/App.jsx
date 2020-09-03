import React, { useState } from "react";
import ModalPopUp from "./ModalPopUp";
import { Button, ButtonToolBar } from "react-bootstrap";
import Css from "/public/styles.css";

import ContactCard from "./Contact_Card";
import AddContact from "./AddContact";

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
    //this.handleSearch = this.handleSearch.bind(this);
    this.returnContactList = this.returnContactList.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  //Searching handling

  //returnContactList, return either searchresult or current one
  returnContactList() {
    return this.state.searchText
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

  //update
  setUpdate(text, key) {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
        console.log(item.key + " " + key);
      }
    });
    //update state
    this.setState({
      items: items
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
          <AddContact onSubmit={this.handleNewContact} />
          <br />
          <ul className="list-group" id="contact-list">
            {this.returnContactList().map((contact) => (
              <li key={contact.email} className="list-group-item">
                <ContactCard
                  contact={contact}
                  deleteContact={this.deleteContact}
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

export default App;
