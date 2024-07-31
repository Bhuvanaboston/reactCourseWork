import { useState } from 'react';
import ResCard from './ResCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useRestaurent from './Utils/useRestaurent';

import useOnlinestatus from './Utils/useOnlinestatus';
const Body = () => {
  const [searchText, setSearchText] = useState('');

  const [restList, filteredRestList] = useRestaurent();
  const Onlinestatus = useOnlinestatus();
  /*conditional rendering
  if (restList.length === 0) {
    return <Shimmer />;
  }*/

  if (Onlinestatus === false) return <h1>You are not connected to internet</h1>;
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
          <Link to={'/restaurentmenu/' + card.info.id} key={card.info.id}>
            <ResCard resData={card} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
