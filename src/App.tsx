import MainLayout from './layouts/MainLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        limit={1}
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        theme="dark"
      />
    </div>
  );
}

export default App;
