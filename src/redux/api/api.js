// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),

  endpoints: (builder) => ({
    saveUser: builder.mutation({
      query: (body) => ({
        url: '/save-user',
        method: 'POST',
        body,
      }),
    }),

    getSaveUser: builder.query({
      query: (body) => ({
        url: '/get-save-user',
        method: 'GET',
        body,
      }),
    }),

    deleteSaveUser: builder.mutation({
      query: (id) => ({
       url: `/delete-save-user/${id}`,
        method: 'DELETE',
     }),
    }),



    
    editSaveUser: builder.mutation({
      query: (data) => ({
        url: "/edit-save-user",
        method: 'PUT',
        body: data
     }),
    }),

  }),
});

export const { useSaveUserMutation , useGetSaveUserQuery, useDeleteSaveUserMutation, useEditSaveUserMutation} = api;

export default api;
