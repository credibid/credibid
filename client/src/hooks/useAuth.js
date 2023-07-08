import { useSelector } from 'react-redux';

export default function useAuth() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  if (auth?.token) {
    return true;
  }
}
