import React from "react";
import { motion } from "framer-motion";
import "./ActionButton.css";

function ActionButton(props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className=" ActionButton"
      onClick={props.onClick}

      // onClick={props.handleClick}
    >
      {props.text}{" "}
    </motion.button>
  );
}
export default ActionButton;
