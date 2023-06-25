import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'



function WeatherReport() {
    // navigator.geolocation.getCurrentPosition(pos => { const { latitude, longitude } = pos.coords; console.log(latitude, longitude) })
    // `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
   
   

    const [address, setaddress] = useState([])


    useEffect(() => {



    }, [])








    // const GetCoordinates = () => {
    //     navigator.geolocation.getCurrentPosition(pos => { const { latitude, longitude } = pos.coords; setlat(latitude); setlong(longitude); console.log({ lat }, { long }) })
    // }


    const [coords, setcoords] = useState("")

    const GetCoordinates = () => {
        navigator.geolocation.getCurrentPosition(pos => { setcoords(pos.coords);console.log(coords.latitude,coords.longitude)})
        
    }
       
     
           







// const loaddata = () => {
//     axios.get("https://api.weatherbit.io/v2.0/current?city=Istanbul&country=TR&key=672f913578e4404e99164b83dc0e4854")
//         .then(res => setcity(res.data.data[0].city_name))



// }




return (
    <>

        <h1>asdsadaasdasd</h1>
        <button onClick={() => GetCoordinates()}>BUTON1</button>


        <p>road : {address.road}</p>
        <p>city : {address.province}</p>
        <p>country :{address.country}</p>





    </>
)
}

export default WeatherReport