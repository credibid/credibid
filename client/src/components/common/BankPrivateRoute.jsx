import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useRoleCheck from '../../hooks/useRoleCheck';

export default function BankPrivateRoute({ children }) {
  const isLoggedIn = useAuth();
  const roleCheck = useRoleCheck();
  if (isLoggedIn) {
    if (roleCheck === 'bank') return children;
    else return <Navigate to='/unauthorised' />;
  } else return <Navigate to='/login' />;
}
