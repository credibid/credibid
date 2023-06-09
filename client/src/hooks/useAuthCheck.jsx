import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '../features/auth/authSlice';
import Cookies from 'js-cookie';

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const cookieAuth = Cookies.get('auth');
    if (cookieAuth) {
      const auth = JSON.parse(cookieAuth);

      if (auth?.token) {
        // dispatch userLoggedIn action
        dispatch(
          userLoggedIn({
            token: auth.token,
            email_address: auth.email_address,
            role: auth.role,
            status: auth.status,
            id: auth.id,
          })
        );
      }
    }

    setAuthChecked(true);
  }, [dispatch]);
  return authChecked;
}
