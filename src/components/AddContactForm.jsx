import React from "react";

const AddContactForm = ({ onInputChange, onFormSubmit }) => (
  <form>
    <div className="form-group class-sm-3">
      <label>Full Name</label>
      <input
        type="name"
        class="form-control"
        name="name"
        onChange={onInputChange}
        placeholder="Alex Tan"
      />
    </div>
    <div className="form-group class-sm-3">
      <label>Gender</label>
      <input
        type="name"
        class="form-control"
        name="gender"
        onChange={onInputChange}
        placeholder="Gender"
      />
    </div>
    <div className="form-group">
      <label>Email address</label>
      <input
        type="email"
        class="form-control"
        name="email"
        onChange={onInputChange}
        placeholder="name@example.com"
      />
    </div>
    <div className="form-group">
      <label>Contact Number</label>
      <input
        type="number"
        class="form-control"
        name="phone"
        onChange={onInputChange}
        placeholder="+65 87654321"
      />
    </div>

    <button type="submit" onClick={onFormSubmit} class="btn btn-primary">
      {" "}
      Add{" "}
    </button>
  </form>
);

export default AddContactForm;
