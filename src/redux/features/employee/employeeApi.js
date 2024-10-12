import { baseApi } from "../../api/baseApi";

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getApplication: builder.query({
      query: () => ({
        url: "/employee",
        method: "GET",
      }),
      providesTags: ['employee']
    }),
    employee: builder.mutation({
      query: (data) => ({
        url: "/employee",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["employee"],
    }),
    
    deleteApplication: builder.mutation({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["employee"],
    }),
  }),
});

export const {useEmployeeMutation, useGetApplicationQuery, useDeleteApplicationMutation} =
employeeApi;
