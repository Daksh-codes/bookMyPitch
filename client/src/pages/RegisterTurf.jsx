import { useState } from "react";
import logo from "../assets/bookMyPitch.png";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function RegisterTurf() {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [pass, setPass] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [price, setPrice] = useState("");
  const [turfName, setTurfName] = useState("");
  const [openTime, setOpenTime] = useState();
  const [closeTime, setCloseTime] = useState();
  const [location , setLocation ] = useState("");
  const submitData = (e) => {
    e.preventDefault();
    console.log(
      email,
      pass,
      fname,
      lname,
      phoneno,
      turfName,
      price,
      openTime,
      closeTime
    );
  };

  return (
    <div className="">
      <Nav />
      <div className="pt-36 font-semibold justify-center text-4xl flex items-center flex-col gap-6">
        <h2>Register</h2>
        {/* first name */}
        <div className="flex gap-4">
          <div className="flex flex-col text-xl">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              id="fname"
              className="w-[14.5vw] p-2 bg-bg border-[1px] border-black"
            />
          </div>
          {/* last name */}
          <div className="flex flex-col text-xl">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              id="lname"
              className="w-[14.5vw] p-2 bg-bg border-[1px] border-black"
            />
          </div>
        </div>
        {/* phone */}
        <div className="flex flex-col text-xl">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="w-[30vw] p-2 bg-bg border-[1px] border-black"
          />
        </div>
        {/* email */}
        <div className="flex flex-col text-xl">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            value={phoneno}
            onChange={(e) => setPhoneno(e.target.value)}
            id="phone"
            className="w-[30vw] p-2 bg-bg border-[1px] border-black"
          />
        </div>
        {/*  password */}
        <div className="flex flex-col text-xl">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            id="password"
            className="w-[30vw] p-2 bg-bg border-[1px] border-black"
          />
        </div>
        {/* turf name  */}
        <div className="flex flex-col text-xl">
          <label htmlFor="turfName">Turf Name</label>
          <input
            type="text"
            value={turfName}
            onChange={(e) => setTurfName(e.target.value)}
            id="turfName"
            className="w-[30vw] p-2 bg-bg border-[1px] border-black"
          />
        </div>
        {/* price per hour  */}
        <div className="flex flex-col text-xl">
          <label htmlFor="price">Price per hour </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="price"
            className="w-[30vw] p-2 bg-bg border-[1px] border-black"
          />
        </div>
        {/* opening time */}
        <div className="flex flex-col text-xl">
          <label htmlFor="openTime">Opening time </label>
          <input
            type="time"
            value={openTime}
            onChange={(e) => setOpenTime(e.target.value)}
            id="openTime"
            className="w-[30vw] p-2 bg-bg border-[1px] border-black"
          />
        </div>
        {/* closing time */}
        <div className="flex flex-col text-xl">
          <label htmlFor="closeTime">Closing time </label>
          <input
            type="time"
            value={closeTime}
            onChange={(e) => setCloseTime(e.target.value)}
            id="closeTime"
            className="w-[30vw] p-2 bg-bg border-[1px] border-black"
          />
        </div>
        <div className="flex flex-col text-xl">
          <label htmlFor="location">Address</label>
          <textarea value={location} onChange={(e) => setLocation(e.target.value)} id="location"  rows="3" className="w-[30vw] bg-bg border-[1px] border-black "></textarea>
        </div>
        <button
          onClick={(e) => submitData(e)}
          className="p-2 w-[30vw] font-light text-xl bg-black text-white hover:bg-neutral-800"
        >
          Next
        </button>
        <h3 className="text-xl pb-36 font-light">
          Already have an account?{" "}
          <Link to={"/login"} className="underline">
            {" "}
            Login
          </Link>
        </h3>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterTurf;
