import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../CssFolder/EventDetails.css";

function EventDetails() {
  useEffect(() => {
    getEventById();
  }, []);

  const [eventDet, seteventDet] = useState({});
  const [placeDet, setplaceDet] = useState({});
  const [timeDet, settimeDet] = useState("");

  const { id } = useParams();

  const getEventById = () => {
    axios
      .get(`https://localhost:7209/api/Event/${id}`)
      .then(
        (res) => (
          getPlaceById(res.data),
          seteventDet(res.data),
          settimeDet(res.data.eventStartTime)
        )
      );
  };

  const getPlaceById = (item) => {
    axios
      .get(`https://localhost:7209/api/Place/${item.placeId}`)
      .then((res) => setplaceDet(res.data));
  };

  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", { month: "long" });
  }

  return (
    <div>
      {
        <div id="biggest">
          <div id="ticketdiv">
            <div id="ticket1"></div>
            <div id="ticket2">
              <div id="tickettop" >
                <div id="namer">
                  {eventDet.eventName}
                </div>
                <div id="desc">
                  <h3>{eventDet.eventDescription}</h3>
                </div>
              </div>
              <div id="threepart" style={{ paddingBottom: 30 }}>
                <div>
                  <h2>{timeDet.substring(8, 10)} {getMonthName(timeDet.substring(5, 7))}</h2>
                  
                </div>
                <div>
                  <h2>{timeDet.substring(11,13)}:{timeDet.substring(14,16)}   </h2>
                  
                  
                </div>
                <div>
                  <h2>{placeDet.placeName}</h2>
                </div>
              </div>
            </div>

            <div id="ticket3">
              <div id="ticket31"></div>
              <div id="ticket32"> 
              
              <div>              <div id="threepart" style={{ paddingBottom: 30 }}>
                <div style={{paddingLeft:130}}>
                  <h2>{timeDet.substring(8, 10)} {getMonthName(timeDet.substring(5, 7))}</h2>
                  
                </div>
                <div  style={{paddingLeft:40}}>
                  <h2>{timeDet.substring(11,13)}:{timeDet.substring(14,16)}   </h2>
                  
                  
                </div>
                <div  style={{paddingLeft:40}}>
                  <h2>{placeDet.placeName}</h2>
                </div>
                
              </div></div>
              
             
              
              
            </div>
            
            </div>
          </div>
          <div id="box">
            <div id="eventDiv">
              <div id="left1"
                style={{
                  fontSize: "x-large",

                  
                  width:"80%",
                  margin:30
                  
                  

                }}
              >
                {eventDet.eventName}
              </div>
              <div id="left2"
                style={{
                  borderStyle: "solid",
                  borderRadius: "10px",
                  backgroundColor: "lightgray",
                  height: 240,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
                  backgroundImage: `url(${eventDet.eventCoverUrl})`,
                  backgroundPosition:"center",
                  width:"50%",
                  color:"aliceblue",
                  fontSize:"large",
                  alignItems:"flex-end",
                  borderColor:"black",
                  
                  
                  
                 
                  
                  textAlign:"center",
                  
                }}
              >
               
              </div>
              <div id="left1"
                style={{
                  fontSize: "large",

           
                  maxWidth:"50%"
                }}
              >
                 {eventDet.eventDescription} <br></br>
                {timeDet.substring(8, 10)}{" "}
                {getMonthName(timeDet.substring(5, 7))}{" "}
                {timeDet.substring(11, 13)}:{timeDet.substring(14, 16)}
              </div>
              <div></div>
            </div>
            <div id="eventDiv">
              <div id="left1"
                style={{
                  fontSize: "x-large",

                  
                  width:"80%",
                  margin:30
                  
                  

                }}
              >
               {placeDet.placeName}
              </div>
              <div id="left2"
                style={{
                  borderStyle: "solid",
                  borderRadius: "10px",
                  backgroundColor: "lightgray",
                  height: 240,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
                  backgroundImage: `url(${placeDet.placePhotoUrl})`,
                  backgroundPosition:"center",
                  width:"50%",
                  color:"aliceblue",
                  fontSize:"large",
                  alignItems:"flex-end",
                  borderColor:"black",
               
                  
                  
                 
                  
                  textAlign:"center",
                  
                }}
              >
               
              </div>
              <div id="left1"
                style={{
                  fontSize: "large",textAlign:"center",
                 
                
                  
                  
                 
                  maxWidth:"50%"
                }}
              > {placeDet.placeAdress} {" "}
                {placeDet.placeCity}
              </div>
              <div></div>
            </div>

          </div>

          {/* <div>{eventDet.eventName}333asdasdasdas</div>
          <div>{placeDet.placeName}yeradiidas</div>

          <div>333asdasdasdas</div> */}


{/* <div id="placeDiv">
              <div
                id="dividi2"
                style={{
                  maxWidth:"80%",
                  fontSize: "x-large",
                  borderStyle: "solid",
                  borderRadius: "10px",
                  backgroundColor: "#fca311",
                  paddingRight: 20,
                  marginLeft:"20%",
                  
                  height: "initial",
                  padding:"1rem",
                  
                }}
              >
                {placeDet.placeName}
              </div>
              <div
                id="dividi2"
                style={{
                  borderStyle: "solid",
                  borderRadius: "10px",
                  backgroundColor: "lightgray",
                  height: 240,
                  display: "flex",
                  
                  alignItems:"flex-end",
                  
                 
                  textAlign:"right",
                  textAlign:"end",
                  color:"aliceblue",
                  borderColor:"black",
                  backgroundImage: `url(${placeDet.placePhotoUrl})`,
                  width:"50%",
                  fontSize:"large",
                  marginLeft:"50%",
                  textAlign:"center",
                  

                  
                  
                  
                  
                }}
              >
                {placeDet.placeAdress}
              </div>
              <div
                id="dividi2"
                style={{
                  fontSize: "xx-large",
                  borderStyle: "solid",
                  borderRadius: "10px",
                  backgroundColor: "#fca311",
                  paddingRight: 20,
                  maxWidth:"50%",
                  marginLeft:"50%"
                }}
              >
                {placeDet.placeCity}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <iframe
                  src={placeDet.placeMapUrl}
                  style={{ width: "70%", height: 300 }}
                ></iframe>
              </div>
            </div> */}
        </div>
        
      }
      <div style={{display:"flex",justifyContent:"center",paddingTop:20}}>
      <iframe 
                  src={placeDet.placeMapUrl}
                  style={{ width: "50%", height: 300}}
                ></iframe>


      </div>

    </div>
  );
}

export default EventDetails;
