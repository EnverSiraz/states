import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'



function WeatherReport() {

    const [address, setaddress] = useState("")
    const [city, setcity] = useState("")
    const [coords, setcoords] = useState("")



    useEffect(() => {

    }, [])


   

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



    const GetTemp = () => {
        axios.get(`https://api.weatherbit.io/v2.0/current?city=${city}&country=TR&key=672f913578e4404e99164b83dc0e4854`)
            .then(res => console.log(res.data.data[0].temp))
    }


    return (
        <>

            <h1>asdsadaasdasd</h1>
            <button onClick={() => GetTemp()}>GetTemp</button>
            <button onClick={() => GetData()}>GetAdress /city</button>
            <button onClick={() => GetCoordinates()}>GetCoordinates</button>

        </>
    )
}

export default WeatherReport