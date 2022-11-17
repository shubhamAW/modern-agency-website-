import React from 'react'
import {features} from '../constants'; //array of those feature texts.
import styles, {layout } from '../style';
import Button from './Button';

// in layout we are storing predefined styles instead of do individually

const FeatureCard = ({icon , title , content , index}) =>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1 } ? "mb-6" : "mb-0" feature-card `}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}>
      <img src={icon} alt="icons" className='w-[50%] h-[50%] object-contain'/>
    </div>

    {/* TEXT description */}
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px]">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1 ">
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className={'layout.section md:flex md:flex-row pb-3 md:pb-8 '}>
      {/* heading description and button component  */}
      <div className={`layout.sectionInfo ${styles.paddingY}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business,<br className='sm:block hidden' /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
          With the right credit card, you can improve 
          your financial life by building credit, earning rewards and saving money. But with 
          hundreds of credit cards on the market.
        </p>
        <Button styles="mt-10"/>
      </div>

      {/* list of features  */}
      <div className={`${layout.sectionImg} flex-col`} >
          {features.map((feature , index)=> (
            <FeatureCard key={feature.id} 
            {...feature} index={index} 
           />
          )) }        
      </div>
    </section>
  )
}

export default Business