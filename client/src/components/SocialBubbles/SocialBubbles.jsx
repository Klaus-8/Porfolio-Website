import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialBubbles = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://twitter.com/ShahuShreyas"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/shreyas-shahu-3b7b17169/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/Klaus-8" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialBubbles;
