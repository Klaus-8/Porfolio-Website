import React, { useState } from "react";
import { HiX, HiMenuAlt4 } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import "./NavBar.styles.scss";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <a href="#home">
        <motion.div
          animate={{ rotate: [0, 360, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="app__navbar-logo"
        >
          <FaReact />
        </motion.div>
      </a>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((nav_item) => (
          <li className="app__flex p-text" key={`link-${nav_item}`}>
            <div />
            <a href={`#${nav_item}`}>{nav_item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map(
                (nav_item) => (
                  <li key={nav_item}>
                    <a href={`#${nav_item}`} onClick={() => setToggle(false)}>
                      {nav_item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
