import { useEffect, useState } from 'react';
import ResCard from './ResCard';
import { SWIGGY_URL } from './Utils/constants';
import Shimmer from './Shimmer';

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    setRestList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  /*conditional rendering
  if (restList.length === 0) {
    return <Shimmer />;
  }*/
  return restList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="fiter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              setFilteredRestList(
                restList.filter(
                  (e) =>
                    e.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                    e.info.costForTwo
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="fiter-btn"
          onClick={() =>
            setFilteredRestList(restList.filter((e) => e.info.avgRating > 4.0))
          }
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestList.map((card) => (
          <ResCard key={card.info.id} resData={card} />
        ))}
      </div>
    </div>
  );
};

export default Body;
