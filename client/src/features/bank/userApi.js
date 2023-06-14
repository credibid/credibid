import { apiSlice } from '../api/apiSlice';

export const bankApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBank: builder.mutation({
      query: (data) => ({
        url: `/bank/createbank`,
        method: 'POST',
        body: data,
      }),
    }),
    setRole: builder.mutation({
      query: (data) => ({
        url: `/user/setuserrole`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const { useCreateBankMutation } = bankApi;
