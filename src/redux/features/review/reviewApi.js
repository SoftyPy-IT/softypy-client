import { baseApi } from "../../api/baseApi";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllReviews: builder.query({
      query: ({ page = 1, limit = 3, search = "" } = {}) => `/reviews?page=${page}&limit=${limit}&search=${search}`,
      providesTags: ["Reviews"],
    }),
    createReviews: builder.mutation({
      query: (data) => ({
        url: "/reviews",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["reviews"],
    }),
    getSingleReview: builder.query({
      query: (id) => `/reviews/${id}`,
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["reviews"],
    }),
    updateReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    
  }),
});

export const { useCreateReviewsMutation, useGetAllReviewsQuery, useDeleteReviewMutation, useGetSingleReviewQuery, useUpdateReviewMutation } = reviewApi;
