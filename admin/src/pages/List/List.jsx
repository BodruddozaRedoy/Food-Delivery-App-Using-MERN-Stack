import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import './List.css'

const List = () => {

  const url = 'http://localhost:4000'
  const [list, setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if(response.data.success){
      setList(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }

  const removeFood = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList()
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchList()
  }, [])

  return (
    <div className='list add flex-cols w-[100%] m-10'>
      <p className='text-xl my-5'>All Foods List</p>
      <div className="list-table w-[100%] text-start">
        <div className="list-table-format title w-[100%] text-start">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index) => {
          return(
            <div key={index} className='list-table-format w-[100%] text-start'>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
              </div>
          )
        })}
        
      </div>
      
    </div>
  )
}

export default List
