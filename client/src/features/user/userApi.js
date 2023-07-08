import { apiSlice } from '../api/apiSlice';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createkyc: builder.mutation({
      query: (data) => ({
        url: `/user/basickyc`,
        method: 'POST',
        body: data,
      }),
    }),
    workskyc: builder.mutation({
      query: (data) => ({
        url: `/user/workskyc`,
        method: 'POST',
        body: data,
      }),
    }),
    assetskyc: builder.mutation({
      query: (data) => ({
        url: `/user/assetskyc`,
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

export const {
  useCreatekycMutation,
  useSetRoleMutation,
  useGetKycQuery,
  useAssetskycMutation,
  useWorkskycMutation,
} = userApi;
