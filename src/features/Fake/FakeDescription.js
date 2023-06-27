import React from 'react'
import { useGetSingleFakeProductQuery } from '../../services/fakeApi'
import { useParams } from 'react-router-dom'
const FakeDescription = () => {
    const {id} = useParams()
    var {isLoading,data} =   useGetSingleFakeProductQuery(id)
    console.log("data::",data,isLoading)
  return (
    <div>
          {
        isLoading ? (
            <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ):(
            <div className='border border-2 border-danger p-2 m-2 w-25 mx-auto'>
                <h3>{data.title}</h3>
                <img alt="" src={data.image} width={200}/>
                <p>{data.description}</p>
                </div>
        )
      }
    </div>
  )
}

export default FakeDescription