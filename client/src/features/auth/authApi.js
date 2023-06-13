import { apiSlice } from '../api/apiSlice';
import { userLoggedIn } from './authSlice';
import Cookies from 'js-cookie';
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: '/auth/signup',
        method: 'POST',
        body,
      }),
    }),

    login: builder.mutation({
      query: (body) => ({
        url: '/auth/signin',
        method: 'POST',
        body,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log('result', result);
          // Cookies.set(
          //   'auth',
          //   JSON.stringify({
          //     accessToken: result.data.accessToken,

          //     user: result.data.user,
          //   }),
          //   { expires: 1 } // 1 day
          // );

          // dispatch(
          //   userLoggedIn({
          //     accessToken: result.data.accessToken,
          //     user: result.data.user,
          //   })
          // );
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
        url: '/auth/thirdpartylogin',
        method: 'POST',
        body,
      }),
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