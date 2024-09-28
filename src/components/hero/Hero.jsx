import { IoSearch } from "react-icons/io5";
import bgImg from "../../assets/greenmindbg.png";
import arrow186 from "../../assets/Vector_186.png";
import arrow187 from "../../assets/Vector_187.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../utils/constran";
import PlantCard from "../plantCard/PlantCard";

const Hero = () => {
  const [query, setQuery] = useState("");

  const [product, setProdect] = useState([]);

  useEffect(() => {
    handleSearchbar();
  }, []);
  const handleSearchbar = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/products/getAllProducts`, {
        params: { query: query },
      });
      setProdect(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-12 bg-primary rounded-md my-2 lg:gap-x-8 lg:px-8 ">
        <div className="flex flex-col md:justify-start justify-center px-4  md:py-10 lg:col-span-7   xl:col-span-6 py-10 rounded-tl-md ">
          <h1 className="text-3xl font-extrabold lg:text-start text-center  tracking-tight text-black md:text-4xl lg:text-6xl ">
            Buy your dream plants
          </h1>
          <div className="flex lg:items-start items-center font-serif  justify-between text-start lg:mx-0 mx-auto md:max-w-72  mt-16">
            <p className="text-2xl border-r-2 pr-3 border-gray-600 font-bold">
              50+ <br />{" "}
              <span className="text-md font-thin">Plant species</span>
            </p>
            <p className="text-2xl ml-2 font-bold">
              100+ <br /> <span className="text-md font-medium">Customers</span>
            </p>
          </div>
          <form action="" className="mt-16 flex items-start space-x-2">
            <div className="flex  sm:max-w-lg  md:w-full  mx-auto  rounded-md font-sans  border-black/30 bg-white px-3  py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
              <input
                className="border-none w-full text-lg   focus:outline-none placeholder:text-gray-600 bg-transparent"
                type="text"
                placeholder="What are you look for ?"
                id="email"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              ></input>
              <span
                className="bg-primary rounded-md p-3"
                onClick={handleSearchbar}
              >
                <IoSearch className="text-xl" />
              </span>
            </div>
          </form>
        </div>
        <div className="sm:relative lg:col-span-5 flex justify-center items-center  md:col-span-6 px-5">
          <img
            src={arrow186}
            alt=""
            className=" sm:h-16 sm2:h-12 h-10 md:mt-24 sm:ml-0 ml-3 md:flex relative  items-center md:mt-32"
          />
          <img
            className=" sm:h-[27rem] sm:w-[25rem]  x-10 sm2:flex sm2:items-center sm:w-[20rem] sm2:h-[18rem]  sm2:w-[18rem] sm2:mt-5 h-[12rem] mt-20 w-[12rem]  -mr-10 "
            src={bgImg}
            alt=""
          />
          <img
            src={arrow187}
            alt=""
            className=" sm:h-28 sm:-mt-64  sm2:h-24 sm2:-mt-48 lg:pr-10   h-20 -mt-36 relative"
          />
        </div>
      </div>

      <PlantCard product={product} />
    </div>
  );
};

export default Hero;
