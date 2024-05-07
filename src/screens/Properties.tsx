// import React from 'react'
import OurProp from '../components/properties/OurProp'
import ProHero from '../components/properties/ProHero'
import ProWhy from '../components/properties/ProWhy'

const Properties = () => {
  return (
    <div className='bg-secondary overflow-x-hidden'>
        <ProHero />
        <OurProp />
        <ProWhy />
    </div>
  )
}

export default Properties