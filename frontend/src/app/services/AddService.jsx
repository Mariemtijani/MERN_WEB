import React from 'react'
import ServiceForm from './ServiceForm'
import ServicePhoto from './ServicePhoto'
import Footer from '../home/Footer'

export default function AddService() {
  return (
    <div>
        <div className='flex justify-center mt-20 pb-4'>
        <ServicePhoto />
      <ServiceForm />
      
    </div>
        <Footer />
    </div>
    
  )
}
