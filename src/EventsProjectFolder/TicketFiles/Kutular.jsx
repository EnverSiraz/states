import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./CssFolder/Kutular.css"



function Kutular() {

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




  return (
    
    <>

    <div id='boxes'>
        {
            events && events.sort(function (a, b) { return new Date(a.eventStartTime) - new Date(b.eventStartTime) }).map(element => {
                return <div id="box10">
                    <div id="boxtepe">  <div id='ele1'>{element.eventName}</div></div>
                    <div id="boxbot">
                        <div id='boxleft'>MAY</div>
                        <div>
                            <div id='box2' style={{ backgroundImage: `url(${element.eventCoverUrl})` }}>
                                <div id='ele1'></div>
                                <div id='ele2'>{element.eventDescription}</div>
                                <div id='ele3'> <div >{element.placeName}</div> </div>
                            </div>
                        </div>
                    </div>
                </div>  
            })
        }
    </div>

</>
















  )
}

export default Kutular