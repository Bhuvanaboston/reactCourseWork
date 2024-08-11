import { useState, useContext } from 'react';
import ResCard, { withAggregatedDiscount } from './ResCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useRestaurent from './Utils/useRestaurent';
import UserContext from './Utils/UserContext';

import useOnlinestatus from './Utils/useOnlinestatus';
const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [customUserName] = useState('');
  const [restList, filteredRestList] = useRestaurent();
  const Onlinestatus = useOnlinestatus();
  const { loggedInUser, setUserData } = useContext(UserContext);

  const RestaurentWithDiscount = withAggregatedDiscount(ResCard);
  /*conditional rendering
  if (restList.length === 0) {
    return <Shimmer />;
  }*/

  if (Onlinestatus === false) return <h1>You are not connected to internet</h1>;
  return restList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black m-4"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="px-4 py-2 bg-green-100 rounded-lg"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100  rounded-lg"
            onClick={() =>
              setFilteredRestList(
                restList.filter((e) => e.info.avgRating > 4.0)
              )
            }
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          User Name:
          <input
            type="text"
            className="border border-solid border-black m-4 p-2"
            value={loggedInUser}
            onChange={(e) => setUserData(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap  m-4 shadow-lg bg-slate-100">
        {filteredRestList.map((card) => (
          <Link to={'/restaurentmenu/' + card.info.id} key={card.info.id}>
            {card.info.aggregatedDiscountInfoV3 ? (
              <RestaurentWithDiscount resData={card} />
            ) : (
              <ResCard resData={card} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
