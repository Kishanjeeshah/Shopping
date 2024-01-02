import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Product from "../components/Productlist";
import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterData from "../components/FilterData";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);
  const [filtercategory, setfiltercategory] = useState('All')


  async function fetchproductdata() {
    setloading(true);
    try {
      const response = await fetch(API_URL);
      const output = await response.json();
      console.log(output);

      if (filtercategory === 'All') {
        setposts(output);
      }
      else {
        setposts(output.filter(array => array.category === filtercategory))
      }

    }
    catch (error) {
      toast.error("Something went wrong ");
      setposts([]);
    }
    setloading(false);
  }

  useEffect(() => {
    fetchproductdata();
  }, [filtercategory]);

  return (
    <div>
      <Navbar />

      <FilterData setfiltercategory={setfiltercategory} filtercategory={filtercategory} />

      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="w-8/12 pt-10 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] ">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center pt-20">No Posts Found</div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
