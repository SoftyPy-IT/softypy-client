import { baseApi } from "../../api/baseApi";

export const portfolioApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPortfolio: builder.query({
      query: ({ allData = false, page = 1, limit = 5, search = '' }) => 
        allData ? `portfolio` : `portfolio?page=${page}&limit=${limit}&search=${search}`,
      providesTags: ['portfolio'],
    }),
 
    getSinglePortfolio: builder.query({
      query: (id) => `/portfolio/${id}`,
    }),
    createPortfolio: builder.mutation({
      query: (body) => ({
        url: "/portfolio",
        method: "POST",
        body,
      }),
      invalidatesTags: ["portfolio"],
    }),
    updatePortfolio: builder.mutation({
      query: ({ id, data }) => ({
        url: `/portfolio/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["portfolio"],
    }),

    deletePortfolio: builder.mutation({
      query: (id) => ({
        url: `/portfolio/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["portfolio"],
    }),
  }),
});

export const {
  useGetPortfolioQuery,
  useGetSinglePortfolioQuery,
  useDeletePortfolioMutation,
  useUpdatePortfolioMutation,
  useCreatePortfolioMutation,
} = portfolioApi;
