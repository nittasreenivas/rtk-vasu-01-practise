import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { reset } from './cartSlice'
const Cart = () => {
    const {cartItems} = useSelector((state) =>state.cart)
    const dispatch = useDispatch()
    console.log("cartItems:::",cartItems)
    const [total,setTotal] = useState(0)
    useEffect(() => {
     let temp = cartItems.reduce((a,b) => {
        return a + parseInt(b.price)
     },0)
     setTotal(temp)
    },[cartItems])
    const handleCheckout = () => {
        alert("THE BILL HAS BEEN PAID BY THE CUSTOMER")
        dispatch(reset())
    }
  return (
    <div className='border border-2 border-danger w-25'>
        <h3>Cart</h3>
        <div>
            {
                cartItems.map((c,i) => {
                    return(
                        <div key={i} className='d-flex flex-wrap justify-content-around'>
                            <h4> {c.strMeal}</h4>
                            <h4 className='text-end'> {c.price} </h4>
                            <hr/>
                            </div>
                    )
                })
            }
        </div>
        <div  className='d-flex flex-wrap justify-content-around'>
            <h4>Total</h4>
            <h4>RS:{total}/-</h4>
            
        </div>
        <button className='btn btn-lg btn-success' onClick={handleCheckout}>checkout</button>
    </div>
  )
}

export default Cart