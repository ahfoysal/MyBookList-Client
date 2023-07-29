import MainLayout from './layouts/MainLayout';
import { Toaster } from '@/components/ui/toaster';
import { useAppDispatch } from './redux/hook';
import { setLoading, setUser } from './redux/features/user/userSlice';
import { useEffect } from 'react';

function App() {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(setLoading(true));
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // window.location.href = '/';
  //       dispatch(setUser(user.email));
  //       dispatch(setLoading(false));
  //     } else {
  //       dispatch(setLoading(false));
  //     }
  //   });
  // }, [dispatch]);

  return (
    <div>
      <MainLayout />
      <Toaster />
    </div>
  );
}

export default App;
