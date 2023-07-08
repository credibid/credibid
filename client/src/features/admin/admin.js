import { apiSlice } from '../api/apiSlice';

export const adminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allBanks: builder.query({
      query: () => ({
        url: `/admin/allbanks`,
        method: 'GET',
      }),
    }),

    deleteCustomer: builder.mutation({
      query: (data) => ({
        url: `/admin/deletecustomer/${data}`,
        method: 'DELETE',
        body: data,
      }),
    }),

    deleteBank: builder.mutation({
      query: (id) => ({
        url: `/admin/deletebank/${id}`,
        method: 'DELETE',
      }),
    }),
    allCustomers: builder.query({
      query: () => ({
        url: `/admin/allcustomers`,
        method: 'GET',
      }),
    }),

    changeUserStatus: builder.mutation({
      query: (data) => ({
        url: `/admin/changeuserstatus/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useAllBanksQuery,
  useDeleteCustomerMutation,
  useAllCustomersQuery,
  useChangeUserStatusMutation,
  useDeleteBankMutation,
} = adminApi;
