import React from "react";
import Typed from "react-typed";
import { motion } from "framer-motion";
import logo from "../../img/signature-40138.png";
import PropTypes from "prop-types";

const Navbar = () => {
  return (
    <nav className="navbar justify-content-center nav-style">
      <motion.img
        animate={{
          x: 0,
          rotate: 360,
        }}
        transition={{
          duration: 2,
        }}
        initial={{
          x: 200,
        }}
        className="navbar-brand  logo-style "
        src={logo}
        alt=""
      />
      <h1>
        <Typed
          strings={["Offline", "Handwritten", "Signature", "Verification"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </h1>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
