import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="">
        <div className="row">
          <div
            style={{ fontSize: "1.4rem", cursor: "pointer" }}
            className="col align-self-start"
          >
            TERMS OF SERVICE/PRIVACY
          </div>
          <div
            style={{ textAlign: "end", visibility: "hidden" }}
            className="col"
          >
            TERMS OF SERVICE/PRIVACY
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
