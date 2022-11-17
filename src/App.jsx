import React from 'react'

import styles from './style';
import {Billing, Hero, Business , CardDeal , Clients , CTA,Navbar, Button , FeedbackCard , Footer , Stats , Testimonials  } from './components';

const App = () => {
  return (
    <div className='bg-primary text-white w-[100%] '>
      {/* navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* hero */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <Hero />
        </div>
      </div>

      {/* other component cards */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth} `}>
          <Stats/>
          <Business/> 
          {/* <Business/> */}
          <Billing/> 
          <CardDeal />
          <Testimonials/>
          <Clients/> 
          < CTA /> 
          <FeedbackCard/>
          <Footer/>
        </div>
      </div>

      
    </div>
  )
}

export default App