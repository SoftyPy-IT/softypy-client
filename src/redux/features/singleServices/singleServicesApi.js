import { baseApi } from "../../api/baseApi";

export const singleServiceApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getAllSingleServices: builder.query({
        query: ({ page = 1, limit = 5, allData = false }) =>
          allData ? `singleServices` : `singleServices?page=${page}&limit=${limit}`,
      }),
      
      getSingleServices: builder.query({
        query: (id) => `/singleServices/${id}`,
      }),
      createSingleServices: builder.mutation({
        query: (body) => ({
          url: "/singleServices",
          method: "POST",
          body,
        }),
        invalidatesTags: ['singleService']
      }),
      updateSingleService: builder.mutation({
        query: ({ id, data }) => ({
          url: `/singleServices/${id}`,
          method: "PUT",
          body:data,
        }),
        invalidatesTags: ["singleService"],
      }),
  
      deleteSingleService: builder.mutation({
        query: (id) => ({
          url: `/singleServices/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ['singleService']
      }),
    }),
  });


  export const {useCreateSingleServicesMutation, useGetAllSingleServicesQuery, useDeleteSingleServiceMutation, useUpdateSingleServiceMutation, useGetSingleServicesQuery } = singleServiceApi