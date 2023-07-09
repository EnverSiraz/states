import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../CssFolder/Mainpage.css";
import { useNavigate } from "react-router-dom";

function Mainpage() {
  const [events, setevents] = useState([]);
  const [places, setplaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getEvents();
    getPlaces();
  }, []);

  const getEvents = () => {
    axios.get("https://localhost:7209/api/Event").then((res) => {
      setevents(res.data);
      setfiltered(res.data);
    });
  };

  const getPlaces = () => {
    axios.get("https://localhost:7209/api/Place").then((res) => {
      setplaces(res.data);
    });
  };

  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", { month: "long" });
  }

  const [filtered, setfiltered] = useState([]);

  const searchFilter = (item) => {
    if (item.length > 0) {
      let filteredResults = events.filter((evnt) =>
        evnt.eventName.toLowerCase().includes(item.toLowerCase().trim())
      );
      setfiltered(filteredResults);
    } else {
      setfiltered(events);
    }
  };

  return (
    <>
      <>
        <div id="main2">
          <div id="pict">
            <input
              onChange={(e) => searchFilter(e.target.value)}
              id="inp1"
              placeholder="...What do you want to see live?"
            ></input>
          </div>
        </div>
      </>
      <>
        <div style={{ height: "auto  ", width: "auto", paddingTop: 0 }}>
          <div id="selectfilter">
            <select  id="select1"
              onChange={(e) => {
                if (e.target.selectedIndex > 0) {
                  searchFilter(e.target.value);
                } else {
                  setfiltered(events);
                }
              }}
             
            >
              <option style={{ color: "darkgray" }}>Events</option>
              {events.map((e) => {
                return (
                  <>
                    <option>{e.eventName}</option>
                  </>
                );
              })}
            </select>
            <select id="select1" onChange={(o)=> {
              if (o.target.selectedIndex>0) {
                let placeFiltered=places.find(p => p.placeName == o.target.value);
                console.log(placeFiltered)
                let eventFiltered=events.filter(e => e.placeId==placeFiltered.id);
                console.log(eventFiltered)
                setfiltered(eventFiltered)

              }
              else{
                setfiltered(events)
              }







            }}>
              <option style={{ color: "darkgray" }}>
              Places
              </option>
              {places.map((p) => {
                return (
                  <>
                    <option>{p.placeName}</option>
                  </>
                );
              })}
            </select>
            <select id="select1">
              <option value={""} disabled selected>
                Cities
              </option>
              <option>Istanbul</option>
              <option>Ankara</option>
              <option>Izmir</option>
              <option>Europe</option>
            </select>
          </div>
        </div>
      </>
      <>
        <div id="boxes">
          {filtered &&
            filtered
              .sort(function (a, b) {
                return new Date(a.eventStartTime) - new Date(b.eventStartTime);
              })
              .map((element) => {
                return (
                  <div
                    id="boxdiv"
                    onClick={() => navigate(`event/${element.id}`)}
                  >
                    <div id="boxtop">{element.eventName}</div>

                    <div
                      id="pictdiv"
                      style={{
                        backgroundImage: `url(${element.eventCoverUrl})`,
                        backgroundPosition: "center",
                      }}
                    >
                      <div id="timediv2">
                        {element.eventStartTime.substring(8, 10)}
                      </div>
                      <div id="timediv" style={{ marginTop: "-15px" }}>
                        {getMonthName(element.eventStartTime.substring(5, 7))}
                      </div>
                    </div>
                    <div id="boxbot">{element.placeName}</div>
                  </div>
                );
              })}
        </div>
      </>
    </>
  );
}

export default Mainpage;
