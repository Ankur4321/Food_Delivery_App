import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cardo from '../components/Cardo'
import { Carousal } from '../components/Carousal'

export default function Home() {
  return (
    <div>
      <div> <Navbar /></div>
     <div> <Carousal/> </div>
     
     <div className='m-3'>
    <Cardo />
    <Cardo />
    <Cardo />
     </div>
      <div> <Footer /></div>




    </div>
  )
}
