
import { baseApi } from "../../api/baseApi";


export const orderApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        crateOrder: builder.mutation({
            query: (data)=>({
                url: '/orders',
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['orders']
        }),
        getOrders: builder.query({
           query: ()=>({
            url: '/orders',
            method: "GET",
           }) 
        })
    })
})

export const {useCrateOrderMutation, useGetOrdersQuery} = orderApi