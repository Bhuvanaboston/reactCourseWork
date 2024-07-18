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
    <div className="resCard">
      <img
        className="food-image"
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          cloudinaryImageId
        }
      ></img>
      <div className="cardBody">
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{slaString}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default ResCard;
