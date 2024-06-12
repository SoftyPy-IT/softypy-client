import { baseApi } from "../../api/baseApi";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlog: builder.query({
      query: ({ allData = false, page = 1, limit = 5, search = '' }) => 
        allData ? `blog` : `blog?page=${page}&limit=${limit}&search=${search}`,
      providesTags: ['blog'],
    }),
 
    getSingleBlog: builder.query({
      query: (id) => `/blog/${id}`,
    }),
    createBlog: builder.mutation({
      query: (body) => ({
        url: "/blog",
        method: "POST",
        body,
      }),
      invalidatesTags: ["blog"],
    }),
    updateBlog: builder.mutation({
      query: ({ id, data }) => ({
        url: `/blog/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),

    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
 useCreateBlogMutation,
 useGetAllBlogQuery,
 useGetSingleBlogQuery,
 useUpdateBlogMutation,
 useDeleteBlogMutation
} = blogApi;
