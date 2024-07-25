import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { RESMENU_URL } from './Utils/constants';
import Shimmer from './Shimmer';

const RestaurentMenu = () => {
  const [restData, setRestData] = useState(null);
  const [menuList, setMenuList] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESMENU_URL + resId);
    const json = await data.json();
    setRestData(json.data);
    setMenuList(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  };
  if (restData === null) return;
  <Shimmer />;
  const { name, avgRating, costForTwoMessage, cuisines, cloudinaryImageId } =
    restData?.cards[2]?.card?.card?.info;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>

      <h2>menu</h2>
      <ul>
        {menuList.map((val) => (
          <li key={val?.card?.info?.id}>
            {val?.card?.info?.name} - Rs.{val?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
