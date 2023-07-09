import React from "react";
import "./CssFolder/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMailReply } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div id="container1" >
      <div id="f11">
        {/* <div id="b11">
          <div className="b12">
            <div id="bheader">LOOKING FOR HELP</div>
            <hr />
            <div id="blist">Help</div>
            <div id="blist">Sales Channels</div>
            <div id="blist">Gift Card</div>
            <div id="blist">Ticket Insurance</div>
            <div id="blist">Data Protection</div>
          </div>
        </div>

        <div id="b11">
          <div className="b12">
            <div id="bheader">ABOUT US</div> <hr />
            <div id="blist">Help</div>
            <div id="blist">Sales Channels</div>
            <div id="blist">Gift Card</div>
            <div id="blist">Ticket Insurance</div>
            <div id="blist">Data Protection</div>
          </div>
        </div> */}



        <div
          id="b15"

        >
          <div id="blist">
            {" "}
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </div>
          <div id="blist">
            {" "}
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </div>
          <div id="blist">
            {" "}
            <FontAwesomeIcon icon={faYoutube} size="3x" />
          </div>
          <div id="blist">
            {" "}
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>

        </div>
      </div>
      <div
        id="verybot"
        style={{
          fontWeight: "bold",
          backgroundColor: "#fca311",
          height: 50,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>©Copyright 2023 Enver Siraz Company</div>
        <div> All Rights Reserved</div>
      </div>
    </div>
  );
}

export default Footer;
