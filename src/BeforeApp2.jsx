import React, { useState } from "react";

import LeftPanel from "./LeftPanel";
import BodyTop from "./EventsProjectFolder/BodyTop";

import Footer from "./EventsProjectFolder/Footer";
import Header from "./ComponentsFolder/Header";

import MiddleList from "./EventsProjectFolder/MiddleList";
import Final from "./EventsProjectFolder/Final";
import Mainpage from "./ComponentsFolder/Mainpage";


function BeforeApp2() {
  const [status, setstatus] = useState(false);

  const ShowLeftMenu = () => {
    setstatus(!status);
  };

  return (
    <>
      {status == true ? (
        <div
          style={{
            backgroundColor: "#FAFBF7",
            display: "grid",
            gridTemplateColumns: "1fr 4fr  ",
          }}
        >
          <LeftPanel />
          <div>
            <Header/>
            <Mainpage/>
            <Footer />
            <Final></Final>
          </div>
        </div>
      ) : (
        <div style={{ backgroundColor: "#FAFBF7" }}>
          <Header/>
<Mainpage/>
          <Footer />
          <Final></Final>
        </div>
      )}
    </>
  );
}

export default BeforeApp2;
