import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./EventsProjectFolder/CssFolder/LeftPanel.css";

function LeftPanel() {
  useEffect(() => {
    getEvents();
  }, []);

  const [events, setevents] = useState([]);

  const getEvents = () => {
    axios.get("https://localhost:7209/api/Event").then((res) => {
      setevents(res.data);
    });
  };

  return (
    <div>
      <div
        id="leftpanelmain"
        style={{
          width: "20%",
          height: "100% ",
          position: "fixed",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", marginTop: "60%" }}
        >
          <div>
            <input
              style={{ fontSize: "large", width: "100%" }}
              placeholder="Email or Phone Number"
            ></input>
          </div>
          <div>
            <input
              style={{ fontSize: "large", width: "100%", marginTop: "%" }}
              placeholder="Password"
            ></input>
          </div>
          <div>
            <button>Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
