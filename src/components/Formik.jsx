import React from "react";

import "../styles/_Formik.scss";

function Formik() {
  return (
    <form className="formik">
      <div className="formik__control">
        <label htmlFor="name" className="formik__control--label">
          Full Name
        </label>
        <input
          type="text"
          className="formik__control--input"
          id="name"
          placeholder="Enter Your Full Name"
        />
      </div>

      <div className="formik__control">
        <label htmlFor="number" className="formik__control--label">
          Mobile Number
        </label>
        <input
          type="number"
          className="formik__control--input"
          id="number"
          placeholder="Enter Your Mobile Number"
        />
      </div>

      <div className="formik__control">
        <label htmlFor="email" className="formik__control--label">
          Email
        </label>
        <input
          type="email"
          className="formik__control--input"
          id="email"
          placeholder="Enter Your Email Address"
        />
      </div>

      <div className="formik__control">
        <label htmlFor="time" className="formik__control--label">
          Time to discussion
        </label>
        <input
          type="time"
          className="formik__control--input"
          id="time"
          placeholder="Enter Your Precious Time To discussion"
        />
      </div>

      <div className="formik__control">
        <label htmlFor="university" className="formik__control--label">
          University / Organization
        </label>
        <select name="university">
          <option className="option" value="Anna University">
            Anna University
          </option>
          <option className="option" value="Bharathiyar University">
            Bharathiyar University
          </option>
          <option className="option" value="Annamalai University">
            Annamalai University
          </option>
        </select>
      </div>
    </form>
  );
}

export default Formik;
