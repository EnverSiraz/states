import React from 'react'
import "./CssFolder/Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faMailReply } from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
    <div id="f11">
      
      <div id='b11'><div className='b12'>
      
      <div id='bheader'>LOOKING FOR HELP</div>
      <hr/>
      <div id='blist'>Help</div>
      <div id='blist'>Sales Channels</div>
      <div id='blist'>Gift Card</div>
      <div id='blist'>Ticket Insurance</div>
      <div id='blist'>Personal Data Protection</div>

      </div></div>

      <div id='b11'><div className='b12'>
      
      <div id='bheader'>ABOUT US</div> <hr/>
      <div id='blist'>Help</div>
      <div id='blist'>Sales Channels</div>
      <div id='blist'>Gift Card</div>
      <div id='blist'>Ticket Insurance</div>
      <div id='blist'>Personal Data Protection</div>

      </div></div>
      
      <div id='b11'><div className='b12'>
      
      <div id='bheader'>WORK WITH US</div> <hr/>
      <div id='blist'>Help</div>
      <div id='blist'>Sales Channels</div>
      <div id='blist'>Gift Card</div>
      <div id='blist'>Ticket Insurance</div>
      <div id='blist'>Personal Data Protection</div>

      </div></div>







      <div id='b11' style={{paddingTop:60 ,display:"flex", alignContent:"center",justifyContent:"space-between"}}>
        <div  id='blist'> <FontAwesomeIcon icon={faFacebook} size="4x" /></div>
        <div  id='blist'> <FontAwesomeIcon icon={faTwitter} size="4x" /></div>
        <div  id='blist'> <FontAwesomeIcon icon={faYoutube} size="4x" /></div>
        <div  id='blist'> <FontAwesomeIcon icon={faInstagram} size="4x" /></div>
        <div  id='blist'> <FontAwesomeIcon icon={faMailReply} size="4x" /></div>
        
        
        
        
        </div>
      
      
    





    </div>
  )
}

export default Footer