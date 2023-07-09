import React from "react";
import "../CssFolder/FirstComp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function FirstComp() {
  const navigate = useNavigate();
  return (
    <>
      <div id="maintop">
        <div id="logodiv" onClick={() => navigate(`/`)}></div>
        <div id="mottodiv"></div>
        <div id="phonediv" className="box2">
          <div>
            <FontAwesomeIcon icon={faPhone} size="xl"  style={{marginRight:5}}/>
          </div>
          <div>0850-123-4567</div>
        </div>
        <div id="doubles">
          <div id="supportdiv" className="box1" style={{marginRight:35,height:102}} >
            <div style={{marginRight:5}}>Support</div>
            <div>
              <FontAwesomeIcon icon={faQuestionCircle} size="xl" />
            </div>
          </div>
          <div id="logindiv" className="box1">
            <div style={{marginRight:5}}>Login</div>
            <div>
              <FontAwesomeIcon icon={faUserCircle} size="xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstComp;
