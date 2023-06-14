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
        url: `/user/setuserrole`,
        method: 'PUT',
        body: data,
      }),
    }),
    getKyc: builder.query({
      query: () => ({
        url: `/user/kyc`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useCreatekycMutation, useSetRoleMutation, useGetKycQuery } =
  userApi;
