import React from 'react'
import { useGetAllFakeProductsQuery } from '../../services/fakeApi'
import { Link } from 'react-router-dom'
const Fake = () => {
  var {isLoading,data} =  useGetAllFakeProductsQuery()
  console.log("data::",data,isLoading)
  return (
    <div>
        <h3>Fake</h3>
        {
            isLoading ? (
                <div className="spinner-border text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            ):(
                <div className='d-flex flex-wrap justify-content-around'>
                    {
                        data.map((d,i) => {
                            return(
                                <div key={i} className='border border-2 border-success w-25 m-2 p-2'>
                                    <Link to={`/fake/${d.id}`}>
                                    <img alt="" src={d.image} width="40%" className='image-thumbnail'/>
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

export default Fake