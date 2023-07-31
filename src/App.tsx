import { useEffect, useState } from 'react';
import MainLayout from './layouts/MainLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from './redux/hook';
import Cookies from 'js-cookie';
import { useJwt } from 'react-jwt';
import { useMeQuery } from './redux/features/auth/authApi';
import { IUser, setToken, setUser } from './redux/features/auth/authSlice';

function App() {
  const dispatch = useAppDispatch();
  const [skip, setSkip] = useState(true)
   const token = Cookies.get('accessToken');
   const  { data, isLoading, error, isSuccess, isError } = useMeQuery(undefined, {
    skip 
   });
    const { decodedToken } = useJwt(token as string);
   
  
  
  useEffect(() => {
      
    if(decodedToken ) {

      const {id , email, role} = decodedToken as Partial<IUser>;
        const user = {
        
            id, email, role
          
        }
      dispatch(setUser(user));
      dispatch(setToken(token as string));
        setSkip(false);
      if(isSuccess){
        dispatch(setUser(data?.data?.user));
    
      }
      if(isError){
        console.log(error)
      }
      // console.log(decodedToken)
    }
  

     
    
  }, [dispatch, decodedToken, token, isSuccess, isError,data, error]);

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
