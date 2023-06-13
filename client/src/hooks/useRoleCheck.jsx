import { useSelector } from 'react-redux';

export default function useRoleCheck() {
  const auth = useSelector((state) => state.auth);
  if (auth.role === 'user') return 'user';
  else if (auth.role === 'bank') return 'bank';
  else if (auth.role === 'admin') return 'admin';
  else return null;
}
