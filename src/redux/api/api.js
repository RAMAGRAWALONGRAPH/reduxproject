// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  // Configure the base URL for your backend API
  endpoints: (builder) => ({
    saveCounter: builder.mutation({
      
      query: (body) => {
        console.log(body)
        return {
        url: '/save-counter',
        method: 'POST',
        body,
      }},
    }),

    getSaveCounter: builder.query({
      
      query: (body) => ({
        url: '/get-save-counter',
        method: 'POST',
        body,
      }),
    }),

    // getCounterData: builder.query({
    //   query: () => ({
    //     url: '/get-counter-data', // Use a more descriptive endpoint name
    //     method: 'GET', // Use GET for data retrieval
    //   }),
    // }),
    

    // endpoints: (builder) => ({
    //   getData: builder.query({
    //     query: () => '/get-data', // Specify the GET endpoint URL
    //   }),
  }),
});

export const { useSaveCounterMutation } = api;

export default api;
