import PropTypes from "prop-types";
import { useState, useRef } from "react";
import "./Collapsible.css";
import arrowSprite from "../assets/arrow.png";

Collapsible.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};

function Collapsible({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible">
      <button className="collapsible-header" onClick={toggleCollapse}>
        <span>{title}</span>
        <span
          className={`collapsible-arrow ${isOpen ? "open" : ""}`}
          aria-hidden="true"
        >
          <img src={arrowSprite} alt="" />
        </span>
      </button>
      <div
        className="collapsible-content"
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
          transition: "max-height 0.1s ease-out",
        }}
        ref={contentRef}
      >
        <div
          className="collapsible-inner"
          style={{
            transform: isOpen ? "translateY(0)" : "translateY(-300px)",
            transition: "transform 0.2s ease-out",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Collapsible;
