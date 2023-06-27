// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const fooditemsApi = createApi({
  reducerPath: 'fooditemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/fooditems/' }),
  endpoints: (builder) => ({
    getAllFoodItems: builder.query({
      query: () => ``,
    }),
     addNewFoodItem:builder.mutation({
        query:(newFood) => ({
            url:"",
            method:"POST",
            body:newFood
        })
     })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllFoodItemsQuery,useAddNewFoodItemMutation} = fooditemsApi