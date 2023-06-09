import { apiSlice } from '../api/apiSlice';
import { userLoggedIn } from './authSlice';
import Cookies from 'js-cookie';
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: '/user/createUser',
        method: 'POST',
        body,
      }),
    }),

    login: builder.mutation({
      query: (body) => ({
        url: '/user/login',
        method: 'POST',
        body,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log('result', result);
          Cookies.set(
            'auth',
            JSON.stringify({
              token: result.data.token,
              email_address: result.data.email_address,
              role: result.data.role,
              status: result.data.status,
              id: result.data.id,
            }),
            { expires: 1 } // 1 day
          );

          dispatch(
            userLoggedIn({
              token: result.data.token,
              email_address: result.data.email_address,
              role: result.data.role,
              status: result.data.status,
              id: result.data.id,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),

    updateUserInfo: builder.mutation({
      query: (body) => ({
        url: '/auth/updateuser',
        method: 'PUT',
        body,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: '/auth/user',
        method: 'GET',
      }),
    }),
    thirdPartyLogin: builder.mutation({
      query: (body) => ({
        url: '/user/thirdpartylogin',
        method: 'POST',
        body,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log('result', result);
          Cookies.set(
            'auth',
            JSON.stringify({
              token: result.data.token,
              email_address: result.data.email_address,
              role: result.data.role,
              status: result.data.status,
              id: result.data.id,
            }),
            { expires: 1 } // 1 day
          );

          dispatch(
            userLoggedIn({
              token: result.data.token,
              email_address: result.data.email_address,
              role: result.data.role,
              status: result.data.status,
              id: result.data.id,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),
  }),
});

export const {
  useGetUserQuery,
  useRegisterMutation,
  useLoginMutation,
  useUpdateUserInfoMutation,
  useThirdPartyLoginMutation,
} = authApi;
