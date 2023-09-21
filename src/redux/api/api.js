// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  tagTypes : ["posts"],
  endpoints: (builder) => ({
    saveUser: builder.mutation({
      query: (body) => ({
        url: '/save-user',
        method: 'POST',
        body,
      }),
      invalidatesTags: ["posts"]
    }),

    getSaveUser: builder.query({
      query: (body) => ({
        url: '/get-save-user',
        method: 'GET',
        body,
        
      }),
      providesTags: ["posts"]
    }),

    deleteSaveUser: builder.mutation({
      query: (id) => ({
       url: `/delete-save-user/${id}`,
        method: 'DELETE',
     }),
     invalidatesTags: ["posts"]
    }),



    
    editSaveUser: builder.mutation({
      query: (data) => ({
        url: "/edit-save-user",
        method: 'PUT',
        body: data
     }),
     invalidatesTags: ["posts"]
    }),

  }),
});

export const { useSaveUserMutation , useGetSaveUserQuery, useDeleteSaveUserMutation, useEditSaveUserMutation} = api;

export default api;
