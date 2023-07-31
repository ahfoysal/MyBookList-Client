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
    <nav className="top backdrop-blur-lg bg-[#152232] z-10">
      <div className="max-w-7xl mx-auto h-full w-full flex justify-between px-24 py-4">
        <div className="logo-container">
          <Link to="/" className="logo text-2xl text-white font-extrabold">
            My Book List
          </Link>
        </div>
        <div className="buttons flex gap-2">
          <Button
            className="w-full bg-transparent hover:bg-transparent  text-neutral-400"
            asChild
          >
            <Link to="/login">Login</Link>
          </Button>
          <Button className="w-fit  flex-1 bg-blue-500 hover:shadow-blue-300 hover:shadow-2xl  text-white">
            <Link to="/signup">SignUp</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
