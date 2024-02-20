import { baseApi } from "../../api/baseApi";

export const packageApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getPackages: builder.query({
        query: () => {
          return {
            url: `/packages`,
            method: "GET",
          };
        },
        providesTags: ["packages"],
      }),
      getSinglePackage: builder.query({
        query: (id) => `/packages/${id}`,
      }),
      createPackage: builder.mutation({
        query: (body) => ({
          url: "/packages",
          method: "POST",
          body,
        }),
        invalidatesTags: ['packages']
      }),
      updatePackage: builder.mutation({
        query: ({ id, data }) => ({
          url: `/packages/${id}`,
          method: "PUT",
          body:data,
        }),
        invalidatesTags: ["packages"],
      }),
  
      deletePackage: builder.mutation({
        query: (id) => ({
          url: `/singleServices/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ['packages']
      }),
    }),
  });


  export const {useGetPackagesQuery, useGetSinglePackageQuery, useCreatePackageMutation, useDeletePackageMutation, useUpdatePackageMutation } = packageApi