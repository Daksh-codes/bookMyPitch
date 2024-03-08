import { Link } from "react-router-dom";
import logo from "../assets/bookMyPitch.png";
import useUserStore from "../store";

function UserNav() {
  const {user , removeUser } = useUserStore()
  // console.log(user)
  const date = new Date()
  return (
    <nav className="fixed top-0 bg-bg z-30 w-screen px-20 py-1 flex items-center justify-between border-b-[1px] border-stone-500 ">
      <Link to={"/"} className="flex gap-2 items-center ">
        <img src={logo} alt="book my pitch logo" />
        <h2 className="text-xl font-bold text-accent">BOOK MY PITCH</h2>
      </Link >
      <div className="flex items-center gap-16 font-medium text-lg">
        <Link to={`/turfListing?minPrice:0&&maxPrice:10000`}>Book Turf</Link >
        <button onClick={removeUser} >Logout</button>
        <h2>{user ? user.firstName : "user"}</h2>
      </div>
    </nav>
  );
}
export default UserNav;
