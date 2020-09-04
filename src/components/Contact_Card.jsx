import React, { Component } from "react";
import { Button, TextField, FormGroup } from "@material-ui/core";

class ContactForm extends Component {
  render() {
    const { name, gender, phone, email, handleChange, addContact } = this.props;
    return (
      <form>
        <FormGroup>
          <TextField
            type="text"
            name="name"
            id="name"
            label="Name"
            value={name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <TextField
            type="text"
            name="gender"
            label="Gender"
            value={gender}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <TextField
            type="text"
            name="phone"
            label="Phone"
            value={phone}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Button
            onClick={addContact}
            variant="contained"
            color="primary"
            className="add-button"
          >
            Add Contact
          </Button>
        </FormGroup>
      </form>
    );
  }
}

export default ContactForm;
