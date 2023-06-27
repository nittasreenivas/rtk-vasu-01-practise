import React from 'react'
import { useGetAllFoodItemsQuery } from '../../services/fooditemsApi'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Cart/cartSlice'
const FoodItems = () => {
  var {isLoading,data} =  useGetAllFoodItemsQuery()
  console.log("data::",data,isLoading)
  const dispatch = useDispatch()
  return (
    <div className='border border-2 border-success w-75'>
        <h3>FoodItems</h3>
        {
            isLoading ? (
                <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ):(
                <div className='d-flex flex-wrap justify-content-between'>
                    {
                        data.map((d,i) => {
                            return(
                                <div key={i} className='border border-2 border-info w-25 m-2 p-2'>
                                    <h4>{d.strMeal}</h4>
                                    <img alt="" src={d.strMealThumb} width="100%" className='img-thumbnail'/>
                                    <button className='btn btn-md btn-danger' onClick={() => {dispatch(addToCart(d))}}>Add To Cart</button>
                                    </div>
                            )
                        })
                    }
                    </div>
            )
        }
    </div>
  )
}

export default FoodItems