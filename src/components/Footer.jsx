import React from 'react';
import { Link } from "react-router-dom";
import { RiTwitterFill,RiFacebookCircleFill,RiInstagramFill,RiLinkedinBoxFill,RiPinterestFill,RiPhoneFill,RiMailFill,RiYoutubeFill} from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

import "../styles/_Footer.scss";

function Footer() {
  return (
    <footer className="footer">
    <div className="footer__container">
      <motion.div initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.3 }}
        viewport={{ once: true }}  className="footer__container--address">
        <Link to="/" className="footer__container--address-logo">
          <img src="/images/matt.jpg" alt="matt_Logo" />
          <a href="#">Matt Engineering Solutions</a>
        </Link>

        <p>
          <IoLocationSharp className="icon" />
          3rd floor,Pillars Gate, <br />
          Vadasery,Kanakumari Dist,
          <br /> Tamil Nadu 629001
        </p>
        <p>
          <RiMailFill className="icon" />
          mattengineeringequipments@gmail.com
        </p>
        <p>
          <RiPhoneFill className="icon" />
          7305197833 <br /> 9486178103
        </p>
      </motion.div>

      <motion.div initial={{opacity:0, y:-100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.6, delay:0.6 }}
        viewport={{ once: true }}  className="footer__container--services">
        <h2 className="footer__title">
          Our Services <span></span>
        </h2>
        <ul className="list">
          <li>
            <Link to="service/:id">Research article writing</Link>
          </li>
          <li>
            <Link to="service/:id">Review Article writing/Editing</Link>
          </li>
          <li>
            <Link to="service/:id">Thesis/Dissertation writing</Link>
          </li>
          <li>
            <Link to="service/:id">Publication support</Link>
          </li>
          <li>
            <Link to="service/:id">Phd end to end assistance</Link>
          </li>
          <li>
            <Link to="service/:id">Proposal writing/Editing</Link>
          </li>
          <li>
            <Link to="service/:id">Plagiarism free writing/Editing</Link>
          </li>
          <li>
            <Link to="service/:id">Proofreading services</Link>
          </li>
          <li>
            <Link to="service/:id">Project development/implementation</Link>
          </li>
        </ul>
      </motion.div>

      <motion.div initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.7 }}
        viewport={{ once: true }}  className="footer__container--links">
        <h2 className="footer__title">
          Quick Links <span></span>
        </h2>
        <ul>
          <li>
            <Link to="/">Conferences 2023</Link>
          </li>
          <li>
            <Link to="/">Our Profile</Link>
          </li>
          <li>
            <Link to="/">Enquiry Form</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">Terms of Use</Link>
          </li>
        </ul>
      </motion.div>
    </div>

    <div className="footer__copyright">
      <motion.div initial={{opacity:0, y:-100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.3 }}
        viewport={{ once: true }}  className="footer__copyright--desc">
       <p> Copyright © 2023. All Right Reserved</p>
      </motion.div>
      <motion.div initial={{opacity:0, y:-100}}
        whileInView={{opacity:1, y:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.5 }}
        viewport={{ once: true }}  className="footer__copyright--social-links">
        <p>Follow Us:</p>
        <RiFacebookCircleFill className="social__icons" />
        <RiInstagramFill className="social__icons" />
        <RiTwitterFill className="social__icons" />
        <RiYoutubeFill className="social__icons" />
        <RiLinkedinBoxFill className="social__icons" />
        <RiPinterestFill className="social__icons" />
      </motion.div>
    </div>
  </footer>
  )
}

export default Footer
