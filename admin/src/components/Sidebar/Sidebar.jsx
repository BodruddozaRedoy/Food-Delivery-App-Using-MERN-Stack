import React from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  
  return (
    <div className='w-[18%] border-[#a9a9a9] border-[1.5px] border-t-0 min-h-[100vh] text-[18px] font-bold'>
      <div className="pt-[50px] pl-[20%] flex flex-col
      gap-[20px]">
        <NavLink to='/add' className='sidebar-option flex items-center gap-[12px] border-[2px] border-[#a9a9a9] py-[8px] px-[10px] border-r-0 cursor-pointer'>
          <img src={assets.add_icon} alt="" />
          <p className=''>Add Items</p>
        </NavLink>
        <NavLink to='/list' className='sidebar-option flex items-center gap-[12px] border-[2px] border-[#a9a9a9] py-[8px] px-[10px] border-r-0 cursor-pointer'>
          <img className='' src={assets.order_icon} alt="" />
          <p className=''>List Items</p>
        </NavLink>
        <NavLink to='/orders' className='sidebar-option flex items-center gap-[12px] border-[2px] border-[#a9a9a9] py-[8px] px-[10px] border-r-0 cursor-pointer'>
          <img className='' src={assets.order_icon} alt="" />
          <p className=''>Order</p>
        </NavLink>
        
        
      </div>
    </div>
  )
}

export default Sidebar
