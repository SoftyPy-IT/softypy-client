
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://softypy-server-fzco.vercel.app'}),
    endpoints: ()=>({}),
    tagTypes: ['singleService','orders', 'reviews', 'packages', 'portfolio', 'employee']
})