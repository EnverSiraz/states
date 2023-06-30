import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./CssFolder/Liste.css"
import "./CssFolder/Motto.png"

function MiddleList() {

    useEffect(() => {
        getEvents()
        getPlaces()

    }, [])



    const [events, setevents] = useState([])

    const getEvents = () => {
        axios.get("https://localhost:7209/api/Event")
            .then(res => {
                setevents(res.data)

            })
    }

    const [places, setplaces] = useState([])

    const getPlaces = () => {
        axios.get("https://localhost:7209/api/Place")
            .then(res => {
                setplaces(res.data)
                console.log(res.data)
            })
    }

    const getPlaceById = (id) => {
        axios.get("https://localhost:7209/api/Place/" + id)
            .then(res => console.log(res.data.placeName))


    }
    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);

        return date.toLocaleString('en-US', { month: 'long' });
    }


    const [selected, setselected] = useState("")
    const getEventById = (id) => {
        axios.get("https://localhost:7209/api/Event/" + id)
            .then(res => setselected(res.data.id))
        console.log(selected)

    }




    return (
        <>
            {selected == "" ? <div id='boxes'>
                {
                    events && events.sort(function (a, b) { return new Date(a.eventStartTime) - new Date(b.eventStartTime) }).map(element => {
                        return <div id="boxdiv" onClick={() => getEventById(element.id)} >

                            <div id="boxtop">{element.eventName}</div>


                            <div id='pictdiv' style={{ backgroundImage: `url(${element.eventCoverUrl})`, backgroundPosition: "center" }}>

                                <div id="timediv" style={{ marginTop: "65px" }}>{element.eventStartTime.substring(8, 10)}</div>
                                <div id="timediv" style={{ marginTop: "-15px" }}>{getMonthName(element.eventStartTime.substring(5, 7))}</div>


                            </div>
                            <div id="boxbot" >{element.placeName}

                            </div>

                        </div>
                    })
                }
            </div>


                : <div id='detaildiv'>

                    {
                        events && events.filter(a => a.id == selected).map(element => {
                            return <div id="detailinside">

                                <button onClick={() => setselected("")}>Exit</button>


                                <div > {element.id} </div>
                                <div> {element.eventName}</div>
                                {
                                    places && places.filter(p => p.id == element.placeId).map(item => {
                                        return <>
                                            <div>{item.placeDescription}</div>
                                            <div class="google-map">
                                                <iframe id='frame' src={`${item.placeMapUrl}`} width="400" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            </div>
                                        </>




                                    }

                                    )
                                }

                            </div>
                        })
                    }
                </div>}

        </>
    )
}

export default MiddleList