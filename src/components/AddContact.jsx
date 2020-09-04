import React, { Component } from "react";
import AddContactForm from "./AddContactForm";

export default class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      newContact: {
        name: "",
        gender: "",
        email: "",
        phone: ""
      }
    };
    this.showAddContactBox = this.showAddContactBox.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showAddContactBox() {
    this.setState({ isHidden: false });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(
      (prevState) => ({
        newContact: {
          ...prevState.newContact,
          [name]: value
        }
      }),
      () => console.log(this.state.newContact)
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isHidden: true });
    this.props.onSubmit(this.state.newContact);
  }
  renderForm() {
    return (
      <div>
        <AddContactForm
          onFormSubmit={this.handleSubmit}
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.state.isHidden === false ? (
          this.renderForm()
        ) : (
          <button onClick={this.showAddContactBox} className="btn">
            {" "}
            Add Contact{" "}
          </button>
        )}
      </div>
    );
  }
}
