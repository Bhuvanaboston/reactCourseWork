import { useState } from 'react';
import ResCard from './ResCard';
import { Restaurant } from './Utils/mockData';

const Body = () => {
  const [restList, setRestList] = useState(Restaurant.restaurants);
  return (
    <div className="body">
      <div className="fiter">
        <button
          className="fiter-btn"
          onClick={() =>
            setRestList(restList.filter((e) => e.info.avgRating > 4.0))
          }
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restList.map((card) => (
          <ResCard key={card.info.id} resData={card} />
        ))}
      </div>
    </div>
  );
};

export default Body;
