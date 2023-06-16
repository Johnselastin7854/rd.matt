import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HiChevronDown,
  HiOutlineXMark,
  HiOutlinePhone,
  HiOutlineBars3,
} from "react-icons/hi2";

import DropDown from "./DropDown";
import { dropDownItem1, dropDownItem2 } from "../data";
import "../styles/_Navbar.scss";
import { motion } from "framer-motion";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseEnter2 = () => {
    setDropdown2(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const onMouseLeave2 = () => {
    setDropdown2(false);
  };

  return (
    <nav className="nav">
     <motion.div initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.2 }}
        viewport={{ once: true }}>
     <Link to="/" className="nav__logo">
        <img src="/images/matt.jpg" alt="matt_Logo" />
        <a href="#">Matt Engineering Solutions</a>
      </Link>
     </motion.div>

      <motion.ul initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{ duration: 1, ease:"linear", type: "spring", bounce:0.3, delay:0.5 }}
        viewport={{ once: true }}  className="nav__menu nav__menu--desktop">
        <li
          className="nav__item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <NavLink to="/" className="nav__link">
            Services
            <HiChevronDown
              className="nav__icon arrow-1"
              onClick={() => setDropdown((prevState) => !prevState)}
            />
            {dropdown && (
              <div className="sub__menu">
                <DropDown menu={dropDownItem1} />
              </div>
            )}
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="#"
            className="nav__link"
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            Who We Are
            <HiChevronDown className="nav__icon arrow-1" />
            {dropdown2 && (
              <div className="sub__menu">
                <DropDown menu={dropDownItem2} />
              </div>
            )}
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="faq" className="nav__link">
            FAQ
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="testimonial" className="nav__link">
            Testimonial
          </NavLink>
        </li>
        <li className="nav__item">
          <Link to="contact" className="nav__link">
            <HiOutlinePhone className="nav__icon" />
            Talk Our Expert
          </Link>
        </li>
      </motion.ul>

      <div className="nav__mobile--menu nav__icon">
        {showMenu ? (
          <HiOutlineXMark
            color="#edede9"
            size={27}
            onClick={() => setShowMenu((prevState) => !prevState)}
          />
        ) : (
          <HiOutlineBars3
            color="#edede9"
            size={27}
            onClick={() => setShowMenu((prevState) => !prevState)}
          />
        )}

        {/* Mobile Menu */}

        {showMenu && (
          <div className="nav__mobile--menu-container">
            <ul className="nav__menu">
              <li className="nav__item">
                <NavLink
                  to="/"
                  className="nav__link"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  Services
                  <HiChevronDown className="nav__icon arrow-1" />
                  {dropdown && (
                    <div className="sub__menu">
                      <DropDown menu={dropDownItem1} />
                    </div>
                  )}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="#"
                  className="nav__link"
                  onMouseEnter={onMouseEnter2}
                  onMouseLeave={onMouseLeave2}
                >
                  Who We Are
                  <HiChevronDown className="nav__icon arrow-1" />
                  {dropdown2 && (
                    <div className="sub__menu">
                      <DropDown menu={dropDownItem2} />
                    </div>
                  )}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="faq" className="nav__link">
                  FAQ
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink href="testimonial" className="nav__link">
                  Testimonial
                </NavLink>
              </li>
              <li className="nav__item">
                <Link to="contact" className="nav__link">
                  <HiOutlinePhone className="nav__icon" />
                  Talk Our Expert
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
