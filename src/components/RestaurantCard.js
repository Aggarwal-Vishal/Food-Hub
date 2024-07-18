import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
    deliveryTime,
  } = resData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className=" mx-6 my-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-orange-200 ">
      <img className="rounded-lg" alt="pic" src={CDN_URL + cloudinaryImageId} />
      <div className="res-card-content">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        {/* <h4 className="">{cuisines}</h4> */}
        <h4 className="">{avgRating} stars</h4>
        <h4>{costForTwo} </h4>
        <h4>{deliveryTime}</h4>
        <h4>User: {loggedInUser}</h4>
        <h4>{sla.slaString} minutes </h4>
      </div>
    </div>
  );
};

//Higher Order function

// input = RestaurantCard ==>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return () => {
    return (
      <div className="">
        <label className="absolute bg-black text-white">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
