import userModel from '../models/userModel.js'

// Add to cart 
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({_id:req.body.userId})
    } catch (error) {
        
    }
}

//Remove from cart
const removeFromCart = async (req, res) => {

}

//Fetch user cart data
const getCart = async (req, res) => {

}

export{addToCart, removeFromCart, getCart}