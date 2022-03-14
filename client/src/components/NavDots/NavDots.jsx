import React from "react";

const NavDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <a
            key={item + index}
            href={`#${item}`}
            style={item === active ? { backgroundColor: "#313BAC" } : {}}
            className="app__navigation-dot"
          >
            {" "}
          </a>
        )
      )}
    </div>
  );
};

export default NavDots;
