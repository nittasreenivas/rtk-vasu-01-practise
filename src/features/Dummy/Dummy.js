import React from 'react'
import { useGetAllDummyProductsQuery } from '../../services/dummyApi'
import { Link } from 'react-router-dom'
const Dummy = () => {
    var {isLoading,data} =   useGetAllDummyProductsQuery()
    console.log("data::",data,isLoading)
  return (
    <div>
        <h3>Dummy</h3>
        {
            isLoading ? (
                <div className="spinner-border text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            ):(
                <div className='d-flex flex-wrap justify-content-around'>
                    {
                        data.products.map((d,i) => {
                            return(
                                <div key={i} className='border border-2 border-danger w-25 m-2 p-2'>
                                    <Link to={`/dummy/${d.id}`}>
                                    <img alt="" src={d.thumbnail} width="40%" className='image-thumbnail'/>
                                    </Link>
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

export default Dummy