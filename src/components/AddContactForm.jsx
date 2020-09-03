import React from "react";

const AddContactForm = ({ onInputChange, onFormSubmit }) => (
  <form>
    <div className="form-group">
      <label htmlFor="emailAddress">Email address</label>
      <input
        type="email"
        class="form-control"
        name="email"
        onChange={onInputChange}
        placeholder="name@example.com"
      />
    </div>

    <div className="form-group class-sm-3">
      <label htmlFor="fullName">First Name</label>
      <input
        type="name"
        class="form-control"
        name="name"
        onChange={onInputChange}
        placeholder="Alex"
      />
    </div>

    <div className="form-group class-sm-3">
      <label htmlFor="fullName">SurName</label>
      <input
        type="name"
        class="form-control"
        name="surname"
        onChange={onInputChange}
        placeholder="Tan"
      />
    </div>

    <div className="form-group">
      <label htmlFor="phoneNumber">Contact Number</label>
      <input
        type="number"
        class="form-control"
        name="phone"
        onChange={onInputChange}
        placeholder="+1 1234567890"
      />
    </div>

    <button type="submit" onClick={onFormSubmit} class="btn btn-primary">
      {" "}
      Add{" "}
    </button>
  </form>
);

export default AddContactForm;
