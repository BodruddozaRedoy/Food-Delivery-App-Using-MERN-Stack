import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = () => {

    const url = "http://localhost:4000"
    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name: "",
        description:"",
        price:"",
        category:"Salad"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/food/add`,formData)
        if (response.data.success) {
            setData({
                name: "",
                description:"",
                price:"",
                category:"Salad"
            })
            setImage(false)
            toast.success(response.data.message)
        
        }
        else{
            toast.error(response.data.message)
        }
    }

  return (
    
      <div className="add w-[100%] mx-5 ml-[25px] mt-[50px] font-[#6d6d6d] text-[16px]">
        <form onSubmit={onSubmitHandler} action="" className='flex flex-col items-start gap-[20px]'>
            <div className="add-img-upload flex-col border p-5">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img className='w-[120px]' src={image ? URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} className='border' type="file" id='image' hidden required />
            </div>
            <div className="add-product-name flex flex-col w-[100%]">
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} className='border p-5' type="text" name="name" id="" placeholder='Type here' />
            </div>
            <div className="add-product-description flex flex-col w-[100%] ">
                <p>Product Description</p>
                <textarea onChange={onChangeHandler} value={data.description} className='border p-5' name="description" id="" cols="30" rows="10" placeholder='Write Content Here'></textarea>
            </div>
            <div className="add-category-price flex gap-5">
                <div className="add-category">
                    <p>Product category</p>
                    <select onChange={onChangeHandler}  className='border p-5' name="category" id="">
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
                    <input onChange={onChangeHandler} value={data.price} className='border p-5' type="number" placeholder='Price' name='price' />
                </div>
            </div>
            <button type='submit' className='add-btn p-[10px] bg-black text-white w-[150px]'>Add</button>
        </form>
      </div>
    
  )
}

export default Add
