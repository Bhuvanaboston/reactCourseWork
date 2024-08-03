import { CLOUD_URL } from './Utils/constants';

const ResCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    slaString,
    costForTwo,
  } = props.resData?.info;

  return (
    <div className="resCard m-4 p-4 w-[250px] h-[600px] bg-pink-50 rounded-lg shadow-lg hover:bg-red-900">
      <img
        className="h-[300px] rounded-lg"
        src={CLOUD_URL + cloudinaryImageId}
      ></img>
      <div className="m-4 p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}⭐</h4>
        <h4>{slaString}</h4>
        <h4 className="font-bold">{costForTwo}</h4>
      </div>
    </div>
  );
};

export default ResCard;
