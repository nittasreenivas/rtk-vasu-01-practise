import React from 'react'
import { useState } from 'react'
import { useAddNewFoodItemMutation } from '../../services/fooditemsApi'
const AddNewFooditem = () => {
    const [newFood,setNewFood] = useState({
        strMeal:'',
        strMealThumb:'',
        price:'',
        category:''
    })
    const handleMeal = (e) => {
        setNewFood({...newFood, strMeal:e.target.value})
    }
    const handleImage = (e) => {
        setNewFood({...newFood, strMealThumb:e.target.value})
    }
    const handlePrice = (e) => {
        setNewFood({...newFood, price:e.target.value})
    }
    const handlecategory = (e) => {
        setNewFood({...newFood,  category:e.target.value})
    }
   var [addNewFood] =  useAddNewFoodItemMutation()
   const food = () => {
    addNewFood(newFood).then(() => {
        setNewFood({ strMeal:'',strMealThumb:'', price:'', category:''})
    })
   }
  return (
    <div>
        <h3>AddNewFooditem</h3>

        <input type="text" placeholder='enter  strMeal' name=" strMeal" value={newFood.strMeal} onChange={handleMeal}/><br/>
        <input type="text" placeholder='enter   strMealThumb' name=" s strMealThumb" value={newFood.strMealThumb} onChange={handleImage}/><br/>
        <input type="text" placeholder='enter  price' name=" price" value={newFood.price} onChange={handlePrice}/><br/>
        <input type="text" placeholder='enter category' name=" category" value={newFood.category} onChange={handlecategory}/><br/>
        <button className='btn btn-primary' onClick={food}>AddFoodItem</button>
    </div>
  )
}

export default AddNewFooditem