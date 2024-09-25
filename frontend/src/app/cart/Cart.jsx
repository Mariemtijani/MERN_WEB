import React from 'react'
import CartTable from './CartTable'
import CartTotal from './CartTotal'
import Footer from '../home/Footer'

export default function Cart() {
  return (
    <div className='mt-32'>
      <CartTable />
      <CartTotal />
      <Footer />
    </div>
  )
}
