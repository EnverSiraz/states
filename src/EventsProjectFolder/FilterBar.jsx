import React from 'react'

function FilterBar() {
  return (
    <div style={{height:50,paddingTop:0}}>

        <div style={{paddingRight:"10%",paddingLeft:"10%",display:"flex",justifyContent:"space-around",alignItems:"center",fontSize:"xx-large"}} >
            <select style={{width:300,marginTop:10,fontSize:"x-large"}}>
                <option>Events</option>
                <option>adsad</option>
                <option>adsad</option>
                <option>adsad</option>
                <option>adsad</option>
            </select>
            <select style={{width:300,fontSize:"x-large"}}>
                <option>Places</option>
                <option>adsad</option>
                <option>adsad</option>
                <option>adsad</option>
                <option>adsad</option>
            </select>
            <select style={{width:300,fontSize:"x-large"}}>
                <option>Cities</option>
                <option>adsad</option>
                <option>adsad</option>
                <option>adsad</option>
                <option>adsad</option>
            </select>
        </div>
    </div>
  )
}

export default FilterBar