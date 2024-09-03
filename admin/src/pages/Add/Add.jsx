import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const Add = () => {

    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name: "",
        description:"",
        price:"",
        category:"Salad"
    })

  return (
    
      <div className="add w-[70%] ml-[25px] mt-[50px] font-[#6d6d6d] text-[16px]">
        <form action="" className='flex flex-col items-start gap-[20px]'>
            <div className="add-img-upload flex-col border p-5">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img className='w-[120px]' src={image ? URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} className='border' type="file" id='image' hidden required />
            </div>
            <div className="add-product-name flex flex-col w-[100%]">
                <p>Product Name</p>
                <input onChange={(e)=>set} className='border p-5' type="text" name="name" id="" placeholder='Type here' />
            </div>
            <div className="add-product-description flex flex-col w-[100%] ">
                <p>Product Description</p>
                <textarea className='border p-5' name="description" id="" cols="30" rows="10" placeholder='Write Content Here'></textarea>
            </div>
            <div className="add-category-price flex gap-5">
                <div className="add-category">
                    <p>Product category</p>
                    <select className='border p-5' name="category" id="">
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="add-price">
                    <p>Product Price</p>
                    <input className='border p-5' type="number" placeholder='Price' name='price' />
                </div>
            </div>
            <button type='submit' className='add-btn p-[10px] bg-black text-white w-[150px]'>Add</button>
        </form>
      </div>
    
  )
}

export default Add
