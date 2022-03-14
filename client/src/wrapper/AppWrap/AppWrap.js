import React from "react";
import { NavDots, SocialBubbles } from "../../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialBubbles />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">© {new Date().getFullYear()}</p>
          </div>
        </div>
        <NavDots active={idName} />
      </div>
    );
  };

export default AppWrap;
