import React from 'react'
import FoodItems from '../FoodItems/FoodItems'
import Cart from '../Cart/Cart'

const Billing = () => {
  return (
    <div>
        <h3>Billing</h3>
        <div className='d-flex flex-wrap'>
        <FoodItems></FoodItems>
        <Cart></Cart>
        </div>
    </div>
  )
}

export default Billing