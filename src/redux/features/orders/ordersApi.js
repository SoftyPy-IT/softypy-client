import { baseApi } from "../../api/baseApi";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
        query: () => ({
          url: "/orders",
          method: "GET",
        }),
        providesTags: ['orders']
      }),
    crateOrder: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["orders"],
    }),
   
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["orders"],
    }),
  }),
});

export const { useCrateOrderMutation, useGetOrdersQuery, useDeleteOrderMutation } =
  orderApi;
