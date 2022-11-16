import React from 'react'
import {features} from '../constants'; //array of those feature texts.
import styles, {layout } from '../style';
import Button from './Button';

// in layout we are storing predefined styles instead of do individually


const Business = () => {
  return (
    <section id="features" className={'layout.section bg-blue-400'}>
      {/* heading description and button component  */}
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          You do the business,<br className='sm:block hidden' /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve 
          your financial life by building credit, earning rewards and saving money. But with 
          hundreds of credit cards on the market.
        </p>
        <Button styles="mt-10"/>
      </div>

      {/* list of features  */}
      <div>
        
      </div>
    </section>
  )
}

export default Business