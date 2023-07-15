import { Link } from "react-router-dom";
import logo from "../project_image/logo.png";
import { toast } from "react-toastify";
const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] mx-auto py-2">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          width={40}
          className="rounded-full border border-amber-400"
          loading="lazy"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-6 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* login signup logout dashboard */}
      <div className="flex gap-x-4 items-center">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="text-white px-[12px] py-[8px] rounded-[8px] border border-amber-400 bg-amber-200/10">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="text-white px-[12px] py-[8px] rounded-[8px] border border-amber-400 bg-amber-200/10">Signup</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button className="text-white px-[12px] py-[8px] rounded-[8px] border border-amber-400 bg-amber-200/10"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("logged out");
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="text-white px-[12px] py-[8px] rounded-[8px] border border-amber-400 bg-amber-200/10">Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
