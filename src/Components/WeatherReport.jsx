import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'



function WeatherReport() {

    const [address, setaddress] = useState("")
    const [city, setcity] = useState("")



    useEffect(() => {

    }, [])


    const [coords, setcoords] = useState("")

    const GetCoordinates = () => {
        navigator.geolocation.getCurrentPosition(pos => { setcoords(pos.coords) })
        console.log(coords.latitude,coords.longitude)

    }



    const GetData = () => {
        axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`)
            .then(res => setaddress(res.data));

        setcity(address.address.province)
        console.log(address.address.province);
        console.log(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`)
    }



    const loaddata = () => {
        axios.get(`https://api.weatherbit.io/v2.0/current?city=${city}&country=TR&key=672f913578e4404e99164b83dc0e4854`)
            .then(res => console.log(res.data.data[0].temp))
    }


    return (
        <>

            <h1>asdsadaasdasd</h1>
            <button onClick={() => loaddata()}>BUTON1</button>
            <button onClick={() => GetData()}>BUTON2</button>
            <button onClick={() => GetCoordinates()}>BUTON3</button>

        </>
    )
}

export default WeatherReport