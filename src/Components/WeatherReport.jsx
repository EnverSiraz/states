import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'



function WeatherReport() {

    const [address, setaddress] = useState("")
    const [city, setcity] = useState("")
    const [coords, setcoords] = useState("")



    useEffect(() => {
        getEvents()

    }, [])


    // const GetTempForLocation = () => {
    //     navigator.geolocation.getCurrentPosition(pos => {
    //         axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`).then(res => {
    //             console.log(res.data.adress.province)
    //         })
    //     }
    //     )
    // }




    const GetCoordinates = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            setcoords(pos.coords);
            console.log(pos.coords.latitude, pos.coords.longitude)
        })



    }

    const WriteCoord = () => {
        console.log(coords.latitude, coords.longitude)
    }



    const GetData = () => {
        axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`)
            .then(res => setaddress(res.data));

        setcity(address.address.province)
        console.log(address.address.province);
        console.log(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`)
    }



    const GetTemp = () => {
        axios.get(`https://api.weatherbit.io/v2.0/current?city=${city}&country=TR&key=672f913578e4404e99164b83dc0e4854`)
            .then(res => console.log(res.data.data[0].temp))
    }



    const [events, setevents] = useState([])

    const getEvents = () => {
        axios.get("https://localhost:7209/api/Event")
            .then(res => {
                setevents(res.data)
                console.log(res.data)
            })
    }


    return (
        <>

            <h1>asdsadaasdasd</h1>
            <button onClick={() => GetTemp()}>GetTemp</button>
            <button onClick={() => GetData()}>GetAdress /city</button>
            <button onClick={() => GetCoordinates()}>GetCoordinates</button>
            <button onClick={() => WriteCoord()}>Wr</button>
            {/* <button onClick={() => GetTempForLocation()}>GetTempForLocation</button> */}

            <hr />


            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Event Name</th>
                        <th>Event Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        events && events.map(element => {
                            return <tr>
                                <td>{element.id}</td>
                                <td>{element.eventName}</td>
                                <td>{element.eventDescription}</td>
                            </tr>
                        })
                    }
                </tbody>


            </table>






        </>
    )
}

export default WeatherReport