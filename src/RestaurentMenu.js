import { useParams } from 'react-router-dom';
import useRestaurentMenu from './Utils/useRestaurentMenu';
import Shimmer from './Shimmer';

const RestaurentMenu = () => {
  const { resId } = useParams();
  const restData = useRestaurentMenu(resId);

  if (restData === null) return;
  <Shimmer />;
  return (
    <div className="menu">
      <h2>menu</h2>
      <ul>
        {restData.map((val) => (
          <li key={val?.card?.info?.id}>
            {val?.card?.info?.name} - Rs.{val?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
