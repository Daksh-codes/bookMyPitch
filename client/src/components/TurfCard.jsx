import turfImg from "../assets/turfImage.png";
import { useNavigate } from "react-router-dom";

function TurfCard(props) {
  const navigate =useNavigate()
  
  return (
    <div onClick={() => navigate(`/turf/${props.id}`)} className="relative w-[25vw] rounded-lg overflow-hidden hover:shadow-2xl hover:border-2 hover:border-black">
      <img src={turfImg} alt="" />
      <div className="absolute bottom-0 w-full">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-white p-4 relative z-10">
          <h3 className="mb-1">
            <span>{props.name}</span>
            <span>- {props.location}</span>
          </h3>
          <h3>{props.price} RS per hour</h3>
        </div>
      </div>
    </div>
  );
}

export default TurfCard;
