import React from "react";
import "../CssFolder/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="MainCont">
        <div className="GridMain">
          <div id="LogoImg" style={{minWidth:188}} onClick={() => navigate(`/`)}></div>
          <div id="MottoImg"></div>
          <div id="box2" className="hid1" >
            <div style={{ paddingRight: 5 }}>
              <FontAwesomeIcon icon={faPhone} size="xl" />
            </div>
            <a style={{ fontSize: "large"}}>0850-123-4567</a>
          </div>

          <div id="suplog" >
            <div id="box1" className="hid1">
              <div id="But1">Support</div>
              <div style={{ paddingLeft: 5 }}>
                <FontAwesomeIcon icon={faQuestionCircle} size="xl" />
              </div>
            </div>
            <div id="box1">
              <div id="But1">Login </div>
              <div style={{ paddingLeft: 5 }}>
                <FontAwesomeIcon icon={faUserCircle} size="xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
