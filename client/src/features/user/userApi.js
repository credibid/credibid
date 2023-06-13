import { apiSlice } from '../api/apiSlice';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createkyc: builder.mutation({
      query: (data) => ({
        url: `/user/createkyc`,
        method: 'POST',
        body: data,
      }),
    }),
    setRole: builder.mutation({
      query: (data) => ({
        url: `/user/setRole`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreatekycMutation, useSetRoleMutation } = userApi;
