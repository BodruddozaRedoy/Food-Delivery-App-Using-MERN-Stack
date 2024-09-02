import React from 'react'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-[8px] px-[4%] border-b-2'>
      <img className='max-w-[10%,80px]' src={assets.logo} alt="" />
      <img className='' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
