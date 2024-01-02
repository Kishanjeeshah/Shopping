import React, { useEffect, useState } from 'react'

const FilterData = ({ setfiltercategory, filtercategory }) => {

  const API_URL = "https://fakestoreapi.com/products";

  let url = `${API_URL}/categories`;

  const [categroies, setcategroies] = useState([]);
  const [loading, setloading] = useState(false)

  async function fetchcategory() {
    setloading(true);
    {
      const response = await fetch(url);
      const output = await response.json();
      console.log(output);
      setcategroies(output);
      setloading(false);
    }
  }

  useEffect(() => {
    fetchcategory();
  }, []);

  const handleFilter = (categoryName) => {
    if (categoryName === 'All') {
      setfiltercategory('All')
      console.log(setfiltercategory)
    } else {
      setfiltercategory(`${categoryName}`);
      console.log(categoryName)
    }
  }

  return (
    <div className='pt-20 text-center font-semibold text-white '>
      {
        loading ? (null) : (<button onClick={() => handleFilter("All")} className={` ${filtercategory === 'All' ? ('border border-4 border-sky-700') : ('bg-opacity-90')} bg-blue-950 uppercase m-4 p-2 rounded-xl`}>All</button>)
      }

      {
        categroies.map((category) => (
          <button onClick={() => handleFilter(`${category}`)} className={` ${filtercategory === category ? ('border border-4 border-sky-700') : ('bg-opacity-90')}  bg-blue-950 uppercase m-4 p-2 rounded-xl`}> {category}</button>
        ))
      }
    </div>
  );
};

export default FilterData