import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      dob: "",
      phoneNo: "",
      email: "",
      address: ""
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };
  formSubmit = (event) => {
    event.preventDefault();
    alert("Thank you, account has been created!!!");
    this.setState({
      fname: "",
      lname: "",
      dob: "",
      phoneNo: "",
      email: "",
      address: ""
    });
  };
  render() {
    const { fname, lname, dob, phoneNo, email, address } = this.state;
    return (
      <div className="container bg-light">
        <h2 className="text-center mt-4 fw-bold">Register form</h2>
        <div className="row">
          <div className="col-md-5">
            <form onSubmit={this.formSubmit} autoComplete="off">
              <div className="mb-3 mt-3">
                <label htmlFor="fname">Firstname:</label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="Enter firstname"
                  name="fname"
                  value={this.state.fname}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="lname">Lastname:</label>
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  placeholder="Enter lastname"
                  name="lname"
                  value={this.state.lname}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="dob">DOB:</label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  name="dob"
                  value={this.state.dob}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="phoneNo">Phone Number:</label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNo"
                  placeholder="Enter phone number"
                  name="phoneNo"
                  value={this.state.phoneNo}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  name="pswd"
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="address">Address:</label>
                <textarea
                  className="form-control"
                  id="address"
                  placeholder="Enter your address"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Create Account
              </button>
            </form>
          </div>
          <div className="col-md-5 m-3 ps-3">
            <ul style={{ listStyle: "none" }}>
              <li>Firstname: {fname}</li>
              <li>Lastname: {lname}</li>
              <li>DOB: {dob}</li>
              <li>Phone Number: {phoneNo}</li>
              <li>Email: {email}</li>
              <li>Address: {address}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
