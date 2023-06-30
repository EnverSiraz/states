import React, { useState } from 'react'

import LeftPanel from './LeftPanel'
import BodyTop from './EventsProjectFolder/BodyTop';
import FilterBar from './EventsProjectFolder/FilterBar';
import Footer from './EventsProjectFolder/Footer';
import MainContainer from './EventsProjectFolder/MainContainer';

import MiddleList from './EventsProjectFolder/MiddleList';
import Final from './EventsProjectFolder/Final';

function BeforeApp2() {



  const [status, setstatus] = useState(false)

  const ShowLeftMenu = () => {
    setstatus(!status)


  }




  return (
    <>
    
    {status==true?    <div style={{ backgroundColor:'#FAFBF7',display: "grid", gridTemplateColumns: "1fr 4fr  " }}>
      <LeftPanel />
      <div>
        <MainContainer doIt={ShowLeftMenu} />
        <BodyTop />
        <FilterBar />
        <MiddleList />
        <Footer />
        <Final></Final>
      </div>

    </div>:
        <div style={{backgroundColor:'#FAFBF7'}}>
        <MainContainer doIt={ShowLeftMenu} />
        <BodyTop />
        <FilterBar />
        <MiddleList />
        <Footer />
        <Final></Final>
      </div>

    






    }
    
    
    
    


    </>

  )
}

export default BeforeApp2