import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // const { user } = useAppSelector((state) => state.user);
  // const dispatch = useAppDispatch();
  // const handleLogout = () => {
  //   signOut(auth).then(() => {
  //     dispatch(setUser(null));
  //     //
  //   });
  // };
  return (
    <nav className="  flex justify-around top backdrop-blur-lg z-10">
      <div className="h-full w-full">this is nav</div>
      <Button asChild>
        <Link to="/">Home</Link>
      </Button>
    </nav>
  );
}
