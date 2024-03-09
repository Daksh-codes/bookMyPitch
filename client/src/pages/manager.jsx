import React from "react";
import UserNav from "../components/UserNav";

function Manager() {
  return (
    <div className="h-scrren bg-bg">
        <UserNav />
      <div className="p-24 pb-8 flex text-3xl justify-between border-b-2 border-black">
        <h3>id </h3>
        <h3>User</h3>
        <h3>Time</h3>
        <h3>Hours</h3>
        <h3>Date</h3>
        <h3>Turf</h3>
      </div>
    </div>
  );
}

export default Manager;
