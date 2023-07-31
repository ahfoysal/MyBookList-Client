import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function MainLayout() {
  return (
    <div className=" bg-[#0B1622] min-h-screen text-neutral-400  dark">
      <Navbar />
      <div className="max-w-7xl w-[90%] mx-auto pt-16">
        <Outlet />
      </div>
    </div>
  );
}
