import { useEffect, useState } from 'react';
import { SWIGGY_URL } from './constants';

const useRestaurent = () => {
  const [restList, setRestList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);

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

  return [restList, filteredRestList];
};

export default useRestaurent;
