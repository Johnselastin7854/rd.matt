import React from 'react';
import { RiPhoneFill } from "react-icons/ri";
import { NameInput, NumbersInput,EmailInput,SelectInput } from './Input';
import { motion } from 'framer-motion';

import "../styles/_Form.scss";


function Form() {
  return (
    <form className="form">
      <motion.h2 initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.2}}
        viewport={{ once: true }} className="heading">
        Enquiry form <span></span>
      </motion.h2>
      <motion.p initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.3}}
        viewport={{ once: true }} className="section-description">
        We are delighted to assist you with any questions or concerns you may
        have. Please take a moment to fill out the form below with your contact
        details and provide a brief description of your enquiry. Our team will
        review your submission and respond to you as soon as possible.
      </motion.p>

      <motion.div initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.2}}
        viewport={{ once: true }} className="form__container--wrapper">
        <motion.div initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.2}}
        viewport={{ once: true }} className="form__container">
          <NameInput
            className="form__container--input"
            title="Full Name"
            required={true}
            placeholder="Enter Your Full Name"
            type="text"
          />
          <NumbersInput
            className="form__container--input"
            title="Mobile Number"
            required={true}
            placeholder="Enter Your Mobile Number"
          />
          <EmailInput
            className="form__container--input"
            required={true}
            placeholder="Enter Your Email Address"
          />
          <NameInput
            className="form__container--input"
            required={false}
            type="time"
            title="Time to discussion"
            placeholder="Enter Your Time To discussion"
          />
          <SelectInput
            className="form__container--input"
            required={false}
            title="University / Organization"
            placeholder="Enter Your University / Organization"
          />
          <SelectInput
            className="form__container--input"
            required={false}
            title="qualification"
            placeholder="Enter Your Qualification"
          />
          <SelectInput
            className="form__container--input"
            required={false}
            title="department / specialization"
            placeholder="Enter Your Department / Specialization"
          />
          <SelectInput
            className="form__container--input"
            required={false}
            title="Country"
            placeholder="Enter Your Country"
          />
          <SelectInput
            className="form__container--input"
            required={true}
            title="select our services"
            placeholder="Select Your Services"
          />
          <NameInput
            className="form__container--input"
            title="Deadline"
            required={false}
            placeholder="Deadline (approx 2 Days)"
            type="text"
          />
        </motion.div>

        <div className="form__btn">
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn">
            <RiPhoneFill className="icon" /> Talk Our Expert
          </button>
        </div>
      </motion.div>
    </form>
  )
}

export default Form
