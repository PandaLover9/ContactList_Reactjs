import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import SearchBar from "./SearchBar";
import ContactList from "./ContactList";
import ContactCard from "./Contact_Card";

class Contacts extends Component {
  render() {
    const {
      handleChange,
      name,
      gender,
      phone,
      email,
      nameError,
      emailError,
      searchedText,
      searchValue,
      addContact,
      contacts,
      editContact,
      deleteContact
    } = this.props;
    return (
      <div>
        <Grid item xs={12} sm={12} align="center">
          <Typography variant="h5">Add / Edit Contact</Typography>
          <ContactCard
            addContact={addContact}
            handleChange={handleChange}
            name={name}
            gender={gender}
            phone={phone}
            email={email}
            nameError={nameError}
            emailError={emailError}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <SearchBar searchedText={searchedText} searchValue={searchValue} />
        </Grid>
        <Grid item>
          <Typography className="contacts-header" align="center" variant="h5">
            Contacts
          </Typography>
          <ContactList
            contacts={contacts}
            editContact={editContact}
            deleteContact={deleteContact}
          />
        </Grid>
      </div>
    );
  }
}

export default Contacts;
