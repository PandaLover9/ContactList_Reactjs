import React from "react";

const EditContactList = ({ onhandleEdit, onFormEdit }) => (
  <form>
    <div className="form-group">
      <div className="form-group class-sm-3">
        <label htmlFor="fullName">Name</label>
        <input
          type="name"
          class="form-control"
          name="name"
          onChange={onhandleEdit}
          placeholder="Name"
        />
      </div>

      <label htmlFor="gender">Gender</label>
      <input
        type="text"
        class="form-control"
        name="gender"
        onChange={onhandleEdit}
        placeholder="Gender"
      />
    </div>

    <div className="form-group">
      <label htmlFor="phone">Phone Number</label>
      <input
        type="number"
        class="form-control"
        name="phone"
        onChange={onhandleEdit}
        placeholder="+65 87654321"
      />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email</label>
      <textarea
        type="email"
        className="form-control"
        name="email"
        onChange={onhandleEdit}
      ></textarea>
    </div>

    <button type="submit" onClick={onFormEdit} class="btn btn-primary">
      Edit{" "}
    </button>
  </form>
);

export default EditContactList;
